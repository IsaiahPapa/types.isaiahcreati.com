// Default catalogs for the Minecraft Integration extension feature.
// Auto-applied when a streamer enables Minecraft; they can override afterwards.

export type PriceTier = "small" | "medium" | "large";
export type MobSet = "tame" | "crazy";

export interface MobEntry {
    mobId: string;
    displayName: string;
    price: number;
    quantity: number;
    modifiersEnabled: boolean;
}

export interface TauntEntry {
    tauntId: string;
    displayName: string;
    price: number;
}

export interface MinigameEntry {
    id: string;
    displayName: string;
    price: number;
}

export interface MinecraftExtensionConfig {
    enabled: boolean;
    priceTier: PriceTier;
    mobSet: MobSet;
    mobs: MobEntry[];
    taunts: TauntEntry[];
    minigames: MinigameEntry[];
}

// ── Tame mob set (default) ──────────────────────────────────────────────
export const DEFAULT_MOBS_TAME: MobEntry[] = [
    { mobId: "minecraft:silverfish", displayName: "Silverfish", price: 10, quantity: 1, modifiersEnabled: true },
    { mobId: "minecraft:spider", displayName: "Spider", price: 15, quantity: 1, modifiersEnabled: true },
    { mobId: "minecraft:zombie", displayName: "Zombie", price: 25, quantity: 1, modifiersEnabled: true },
    { mobId: "minecraft:skeleton", displayName: "Skeleton", price: 25, quantity: 1, modifiersEnabled: true },
    { mobId: "minecraft:creeper", displayName: "Creeper", price: 50, quantity: 1, modifiersEnabled: true },
    { mobId: "minecraft:enderman", displayName: "Enderman", price: 100, quantity: 1, modifiersEnabled: true },
    { mobId: "minecraft:blaze", displayName: "Blaze", price: 150, quantity: 1, modifiersEnabled: true },
    { mobId: "minecraft:ravager", displayName: "Ravager", price: 250, quantity: 1, modifiersEnabled: true },
];

// ── Crazy mob set (tame + extra dangerous mobs, disabled by default) ────
export const DEFAULT_MOBS_CRAZY: MobEntry[] = [
    ...DEFAULT_MOBS_TAME,
    { mobId: "minecraft:warden", displayName: "Warden", price: 500, quantity: 1, modifiersEnabled: true },
    { mobId: "minecraft:ender_dragon", displayName: "Ender Dragon", price: 500, quantity: 1, modifiersEnabled: true },
    { mobId: "minecraft:wither", displayName: "Wither", price: 500, quantity: 1, modifiersEnabled: true },
    { mobId: "minecraft:ghast", displayName: "Ghast", price: 300, quantity: 1, modifiersEnabled: true },
    { mobId: "minecraft:evoker", displayName: "Evoker", price: 200, quantity: 1, modifiersEnabled: true },
    { mobId: "minecraft:vindicator", displayName: "Vindicator", price: 150, quantity: 1, modifiersEnabled: true },
    { mobId: "minecraft:piglin_brute", displayName: "Piglin Brute", price: 175, quantity: 1, modifiersEnabled: true },
];

// ── Taunt defaults (deduped, Big/Tiny removed — now modifiers) ──────────
export const DEFAULT_TAUNTS: TauntEntry[] = [
    // Cheap (5–25)
    { tauntId: "tnt", displayName: "Spawn Primed TNT", price: 5 },
    { tauntId: "punch", displayName: "Smack with Fish", price: 5 },
    { tauntId: "noise", displayName: "Random Noise", price: 10 },
    { tauntId: "drop", displayName: "Drop item in hand", price: 10 },
    { tauntId: "shuffle", displayName: "Shuffle Inventory", price: 15 },
    { tauntId: "cobweb", displayName: "Cobwebbed!", price: 15 },
    { tauntId: "stack_one", displayName: "Stack of One", price: 15 },
    { tauntId: "half_heart", displayName: "Half-Hearted", price: 20 },
    { tauntId: "hungry", displayName: "Starving!", price: 20 },
    { tauntId: "break", displayName: "Break block under me", price: 20 },
    { tauntId: "hot_potato", displayName: "Hot Potato", price: 25 },
    { tauntId: "sky", displayName: "To The Moon!", price: 25 },
    // Mischievous (25–50)
    { tauntId: "strike", displayName: "Lightning Strike", price: 25 },
    { tauntId: "bury", displayName: "Buried Alive", price: 25 },
    { tauntId: "blind_noise", displayName: "Blind Panic", price: 25 },
    { tauntId: "rename_chat", displayName: "Rename the Streamer", price: 25 },
    { tauntId: "fake_tp", displayName: "Fake Teleport", price: 30 },
    { tauntId: "anvil", displayName: "Anvil Drop", price: 30 },
    { tauntId: "drunk", displayName: "Drunk Streamer", price: 30 },
    { tauntId: "fire_trail", displayName: "Fire Trail", price: 35 },
    { tauntId: "downgrade_gear", displayName: "Downgrade Gear", price: 40 },
    { tauntId: "curse_gear", displayName: "Cursed!", price: 40 },
    // Event (50–75)
    { tauntId: "chicken_rain", displayName: "Chicken Rain", price: 50 },
    { tauntId: "raid", displayName: "Prepare to Fight!", price: 50 },
    { tauntId: "gremlin", displayName: "Gremlin", price: 50 },
    { tauntId: "anvil_rain", displayName: "Anvil Rain", price: 60 },
    { tauntId: "meteor_rain", displayName: "Meteor Rain", price: 75 },
    { tauntId: "lucky_block", displayName: "Lucky Block", price: 75 },
    // Minigames (100–125)
    { tauntId: "parkour", displayName: "Parkour Course", price: 100 },
    { tauntId: "tntrun", displayName: "TNT Run", price: 100 },
    { tauntId: "dropper", displayName: "Dropper", price: 100 },
    { tauntId: "sumo", displayName: "Arena", price: 125 },
    // Visual (25–50)
    { tauntId: "fov_quake", displayName: "Quake FOV", price: 25 },
    { tauntId: "fov_zoom", displayName: "Ultra Zoom", price: 25 },
    { tauntId: "pumpkin_view", displayName: "Pumpkin View", price: 25 },
    { tauntId: "vignette_heartbeat", displayName: "Heartbeat", price: 30 },
    { tauntId: "pixelate", displayName: "PS1 Aesthetic", price: 30 },
    { tauntId: "mirror", displayName: "Mirror World", price: 35 },
    { tauntId: "fisheye", displayName: "Fisheye", price: 35 },
    { tauntId: "crt", displayName: "Monitor Downgrade", price: 35 },
    { tauntId: "blur", displayName: "Blur", price: 40 },
    { tauntId: "inverted_colors", displayName: "Inverted Colors", price: 40 },
    { tauntId: "black_and_white", displayName: "1950s", price: 40 },
    { tauntId: "lsd", displayName: "Lucy In The Sky", price: 50 },
    { tauntId: "upside_down", displayName: "Upside Down", price: 50 },
    { tauntId: "rolling_camera", displayName: "Rolling Camera", price: 50 },
    { tauntId: "camera_tilt", displayName: "Tilted Camera", price: 50 },
    { tauntId: "dvd", displayName: "DVD Screensaver", price: 50 },
    { tauntId: "inverted_controls", displayName: "Inverted Controls", price: 50 },
    { tauntId: "mouse_drifting", displayName: "Mouse Drifting", price: 50 },
];

// ── Minigame defaults ───────────────────────────────────────────────────
export const DEFAULT_MINIGAMES: MinigameEntry[] = [
    { id: "parkour", displayName: "Parkour Course", price: 100 },
    { id: "tntrun", displayName: "TNT Run", price: 100 },
    { id: "dropper", displayName: "Dropper", price: 100 },
    { id: "sumo", displayName: "Arena", price: 125 },
];

// ── Price tier lookup tables ────────────────────────────────────────────
// Lookup tables (not multipliers) to avoid rounding issues — every value
// is a curated base price (multiple of 5, from CURATED_BASE_PRICES).

export const MOB_PRICE_TIERS: Record<PriceTier, Record<string, number>> = {
    small: {
        "minecraft:silverfish": 5,
        "minecraft:spider": 10,
        "minecraft:zombie": 15,
        "minecraft:skeleton": 15,
        "minecraft:creeper": 25,
        "minecraft:enderman": 50,
        "minecraft:blaze": 75,
        "minecraft:ravager": 125,
        "minecraft:warden": 250,
        "minecraft:ender_dragon": 250,
        "minecraft:wither": 250,
        "minecraft:ghast": 150,
        "minecraft:evoker": 100,
        "minecraft:vindicator": 75,
        "minecraft:piglin_brute": 100,
    },
    medium: {
        "minecraft:silverfish": 10,
        "minecraft:spider": 15,
        "minecraft:zombie": 25,
        "minecraft:skeleton": 25,
        "minecraft:creeper": 50,
        "minecraft:enderman": 100,
        "minecraft:blaze": 150,
        "minecraft:ravager": 250,
        "minecraft:warden": 500,
        "minecraft:ender_dragon": 500,
        "minecraft:wither": 500,
        "minecraft:ghast": 300,
        "minecraft:evoker": 200,
        "minecraft:vindicator": 150,
        "minecraft:piglin_brute": 175,
    },
    large: {
        "minecraft:silverfish": 25,
        "minecraft:spider": 50,
        "minecraft:zombie": 50,
        "minecraft:skeleton": 50,
        "minecraft:creeper": 100,
        "minecraft:enderman": 200,
        "minecraft:blaze": 300,
        "minecraft:ravager": 500,
        "minecraft:warden": 500,
        "minecraft:ender_dragon": 500,
        "minecraft:wither": 500,
        "minecraft:ghast": 500,
        "minecraft:evoker": 300,
        "minecraft:vindicator": 300,
        "minecraft:piglin_brute": 350,
    },
};

export const TAUNT_PRICE_TIERS: Record<PriceTier, Record<string, number>> = {
    small: {
        tnt: 5, punch: 5, noise: 5, drop: 5, shuffle: 10, cobweb: 10, stack_one: 10,
        half_heart: 10, hungry: 10, break: 10, hot_potato: 15, sky: 15,
        strike: 15, bury: 15, blind_noise: 15, rename_chat: 15, fake_tp: 15,
        anvil: 15, drunk: 15, fire_trail: 20, downgrade_gear: 20, curse_gear: 20,
        chicken_rain: 25, raid: 25, gremlin: 25, anvil_rain: 30, meteor_rain: 40,
        lucky_block: 40, parkour: 50, tntrun: 50, dropper: 50, sumo: 75,
        fov_quake: 15, fov_zoom: 15, pumpkin_view: 15, vignette_heartbeat: 15,
        pixelate: 15, mirror: 20, fisheye: 20, crt: 20, blur: 20,
        inverted_colors: 20, black_and_white: 20, lsd: 25, upside_down: 25,
        rolling_camera: 25, camera_tilt: 25, dvd: 25, inverted_controls: 25,
        mouse_drifting: 25,
    },
    medium: {
        tnt: 5, punch: 5, noise: 10, drop: 10, shuffle: 15, cobweb: 15, stack_one: 15,
        half_heart: 20, hungry: 20, break: 20, hot_potato: 25, sky: 25,
        strike: 25, bury: 25, blind_noise: 25, rename_chat: 25, fake_tp: 30,
        anvil: 30, drunk: 30, fire_trail: 35, downgrade_gear: 40, curse_gear: 40,
        chicken_rain: 50, raid: 50, gremlin: 50, anvil_rain: 60, meteor_rain: 75,
        lucky_block: 75, parkour: 100, tntrun: 100, dropper: 100, sumo: 125,
        fov_quake: 25, fov_zoom: 25, pumpkin_view: 25, vignette_heartbeat: 30,
        pixelate: 30, mirror: 35, fisheye: 35, crt: 35, blur: 40,
        inverted_colors: 40, black_and_white: 40, lsd: 50, upside_down: 50,
        rolling_camera: 50, camera_tilt: 50, dvd: 50, inverted_controls: 50,
        mouse_drifting: 50,
    },
    large: {
        tnt: 10, punch: 10, noise: 20, drop: 20, shuffle: 30, cobweb: 30, stack_one: 30,
        half_heart: 40, hungry: 40, break: 40, hot_potato: 50, sky: 50,
        strike: 50, bury: 50, blind_noise: 50, rename_chat: 50, fake_tp: 60,
        anvil: 60, drunk: 60, fire_trail: 70, downgrade_gear: 80, curse_gear: 80,
        chicken_rain: 100, raid: 100, gremlin: 100, anvil_rain: 120, meteor_rain: 150,
        lucky_block: 150, parkour: 200, tntrun: 200, dropper: 200, sumo: 250,
        fov_quake: 50, fov_zoom: 50, pumpkin_view: 50, vignette_heartbeat: 60,
        pixelate: 60, mirror: 70, fisheye: 70, crt: 70, blur: 80,
        inverted_colors: 80, black_and_white: 80, lsd: 100, upside_down: 100,
        rolling_camera: 100, camera_tilt: 100, dvd: 100, inverted_controls: 100,
        mouse_drifting: 100,
    },
};

export const MINIGAME_PRICE_TIERS: Record<PriceTier, Record<string, number>> = {
    small: { parkour: 50, tntrun: 50, dropper: 50, sumo: 75 },
    medium: { parkour: 100, tntrun: 100, dropper: 100, sumo: 125 },
    large: { parkour: 200, tntrun: 200, dropper: 200, sumo: 250 },
};