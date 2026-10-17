import { ThrowableId, throwables, throwableAliases } from "./catalog";

export type AvailableThrowItems =
    | { type: "all" }
    | { type: "selected"; items: ThrowableId[] };

export type ChannelPointItemSelection =
    | { type: "fixed"; item: ThrowableId }
    | { type: "random" }
    | { type: "text" };

export interface ThrowItemSettings {
    availableItems: AvailableThrowItems;
    itemSelection: ChannelPointItemSelection;
    positionSelection: { type: "random" };
    /** How long food residue remains after impact, including its fade. Omitted legacy settings use the default. */
    splatDurationMs?: number;
}

/** Transport-independent renderer input. Coordinates use top-left origin, in [0, 1]. */
export interface ResolvedThrow {
    id: string;
    effect: ThrowableId;
    target: { u: number; v: number };
    seed: number;
    /** Resolved post-impact food residue lifetime, including fade; always present on delivered throws. */
    splatDurationMs?: number;
}

export type ThrowAdmission =
    | "accepted"
    | "duplicate"
    | "invalid"
    | "expired"
    | "error"
    | "unknown-effect"
    | "paused"
    | "busy"
    | "unavailable";

export interface ThrowDelivery {
    throw: ResolvedThrow;
    expiresAt: number;
}

/**
 * Canonical backend names for the taunt reward. The `Throw*` names above remain
 * the stored/legacy contract and keep their existing consumers working.
 */
export type TauntSettings = ThrowItemSettings;
export type TauntDelivery = ThrowDelivery;
export type TauntAdmission = ThrowAdmission;

export const TAUNT_TTL_MS = 15000;

/**
 * Per-reward food-residue lifetime after impact, including its fade. It does not
 * affect flight or solid props. Admission freshness (`TAUNT_TTL_MS`) is a
 * separate invariant and must not be confused with splat duration.
 */
export const DEFAULT_TAUNT_SPLAT_DURATION_MS = 7000;
export const MIN_TAUNT_SPLAT_DURATION_MS = 2000;
export const MAX_TAUNT_SPLAT_DURATION_MS = 30000;

export const isTauntSplatDurationMs = (value: unknown): value is number =>
    typeof value === "number" &&
    isFinite(value) &&
    Math.floor(value) === value &&
    value >= MIN_TAUNT_SPLAT_DURATION_MS &&
    value <= MAX_TAUNT_SPLAT_DURATION_MS;

export const getTauntSplatDurationMs = (value: unknown): number =>
    isTauntSplatDurationMs(value) ? value : DEFAULT_TAUNT_SPLAT_DURATION_MS;

/**
 * TRANSITIONAL ONLY - consumer-rename safety bridge.
 * Temporary aliases so consumers still importing the short-lived
 * `*DisplayDuration*` names keep resolving while they migrate to the canonical
 * splat names above. These are NOT new duration semantics and do NOT reintroduce
 * a `displayDurationMs` settings field. Remove once every consumer import is
 * updated; do not build on these.
 */
export const DEFAULT_TAUNT_DISPLAY_DURATION_MS = DEFAULT_TAUNT_SPLAT_DURATION_MS;
export const MIN_TAUNT_DISPLAY_DURATION_MS = MIN_TAUNT_SPLAT_DURATION_MS;
export const MAX_TAUNT_DISPLAY_DURATION_MS = MAX_TAUNT_SPLAT_DURATION_MS;
export const isTauntDisplayDurationMs = isTauntSplatDurationMs;
export const getTauntDisplayDurationMs = getTauntSplatDurationMs;

/** @deprecated Taunts now ride the shared `event` payload on the normal room. */
export const THROW_EVENT = "taunt:throw";
export const THROW_TTL_MS = TAUNT_TTL_MS;
/** @deprecated Taunts now use the normal `event.uuid` room; no capability room. */
export const tauntRoom = (key: string): string => `taunts:${key}`;

export const defaultThrowItemSettings = (): ThrowItemSettings => ({
    availableItems: { type: "all" },
    itemSelection: { type: "random" },
    positionSelection: { type: "random" },
    splatDurationMs: DEFAULT_TAUNT_SPLAT_DURATION_MS,
});

export const isThrowableId = (value: unknown): value is ThrowableId =>
    throwables.some((item) => item.id === value);

export const isThrowItemSettings = (value: unknown): value is ThrowItemSettings => {
    const settings = value as ThrowItemSettings;
    if (!settings || settings.positionSelection?.type !== "random") return false;
    // Omitted splat duration is valid legacy data; a supplied value must be in range.
    if (settings.splatDurationMs !== undefined && !isTauntSplatDurationMs(settings.splatDurationMs)) {
        return false;
    }
    const available = settings.availableItems;
    if (
        !available ||
        !(
            available.type === "all" ||
            (available.type === "selected" &&
                Array.isArray(available.items) &&
                available.items.length > 0 &&
                available.items.length <= throwables.length &&
                available.items.every(isThrowableId) &&
                new Set(available.items).size === available.items.length)
        )
    ) return false;
    const selection = settings.itemSelection;
    return (
        !!selection &&
        (selection.type === "random" ||
            selection.type === "text" ||
            (selection.type === "fixed" && isThrowableId(selection.item)))
    );
};

export const allowedThrowItems = (available: AvailableThrowItems): ThrowableId[] =>
    available.type === "all" ? throwables.map(({ id }) => id) : [...available.items];

const normalizeName = (value: string): string =>
    value.trim().toLowerCase().replace(/\s+/g, " ");

export const resolveThrowItem = (
    settings: ThrowItemSettings,
    input: unknown,
    random: () => number = Math.random,
): ThrowableId => {
    if (!isThrowItemSettings(settings)) throw new Error("Invalid throw item settings");
    // Availability configures random/text pools. Fixed rewards independently stay fixed.
    if (settings.itemSelection.type === "fixed") return settings.itemSelection.item;
    const allowed = allowedThrowItems(settings.availableItems);
    const name = typeof input === "string" ? normalizeName(input) : "";
    if (settings.itemSelection.type === "text" && name && name !== "random") {
        const match = throwables.find(
            (item) =>
                allowed.indexOf(item.id) !== -1 &&
                [item.name, ...(throwableAliases[item.id] || [])].some(
                    (alias) => normalizeName(alias) === name,
                ),
        );
        if (match) return match.id;
    }
    return allowed[Math.min(allowed.length - 1, Math.floor(random() * allowed.length))];
};

/** Independent axes over the entire source. No webcam region or studio target restriction. */
export const randomThrowTarget = (
    random: () => number = Math.random,
): ResolvedThrow["target"] => ({
    u: random(),
    v: random(),
});

/**
 * The socket room taunt deliveries go to. Only overlays that understand taunts
 * join it, so a browser source still running an older overlay never receives a
 * throw (which it would otherwise queue as a blank alert, delaying real ones).
 */
export const tauntDeliveryRoom = (alertKey: string): string => `${alertKey}:taunts`;

/** Twitch caps reward titles at 45 characters. */
const MAX_REWARD_TITLE_LENGTH = 45;

const withArticle = (name: string): string => `${/^[aeiou]/.test(name) ? "an" : "a"} ${name}`;

/** "an egg", "an egg or tomato", "an egg, tomato or rubber duck". */
const listWithArticle = (names: string[]): string => {
    const [first, ...rest] = names;
    const head = [withArticle(first), ...rest.slice(0, -1)].join(", ");
    return rest.length ? `${head} or ${rest[rest.length - 1]}` : head;
};

export const throwRewardDefaults = (settings: ThrowItemSettings) => {
    const selection = settings.itemSelection;
    const names = allowedThrowItems(settings.availableItems)
        .map((id) => throwables.find((item) => item.id === id)!.name.toLowerCase());
    const fixed = selection.type === "fixed"
        ? throwables.find(({ id }) => id === selection.item)?.name.toLowerCase()
        : undefined;
    // A short random pool is named outright, so viewers know what they are paying
    // for: up to three items in the title, up to five in the description.
    const pool = selection.type === "random" && settings.availableItems.type === "selected" && names.length <= 5
        ? listWithArticle(names)
        : undefined;
    const thrown = fixed ? withArticle(fixed) : pool;
    const namedTitle = fixed || (pool && names.length <= 3) ? `Throw ${thrown} at me` : "";
    const lands = "Lands randomly anywhere on screen.";
    let prompt: string;
    if (selection.type === "text") {
        prompt = `Type an item like ${names.slice(0, 3).join(", ")}. Anything else throws a random item. ${lands}`;
    } else if (thrown) {
        prompt = `Throws ${thrown}. ${lands}`;
    } else if (settings.availableItems.type === "selected") {
        prompt = `Throws a random item: ${names.slice(0, 3).join(", ")} and more. ${lands}`;
    } else {
        prompt = `Throws a random item. ${lands}`;
    }
    return {
        title: namedTitle && namedTitle.length <= MAX_REWARD_TITLE_LENGTH ? namedTitle : "Throw something at me",
        cost: 500,
        isUserInputRequired: selection.type === "text",
        prompt: prompt.slice(0, 200),
    };
};
