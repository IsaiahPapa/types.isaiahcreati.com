import { ExtensionItem } from "../interfaces/extension/ExtensionItem";
import ExtensionsDocument from "../interfaces/database/bot-isaiahcreati-com/ExtensionsDocument";

export type FiresaleProduct = { cost: { amount: number } };

export interface FiresaleStateActiveItem {
    uuid: string;
    firesalePrice: number;
}

export type FiresaleStateActive = {
    active: true;
    endsAt: number;
    items: FiresaleStateActiveItem[];
    discountPercent: number;
    startedAt: number;
};

export type FiresaleStateInactive = { active: false };

export type FiresaleState = FiresaleStateActive | FiresaleStateInactive;

export function findClosestPredefinedAmount(
    amount: number,
    products: FiresaleProduct[]
): number {
    if (!products.length) return amount;
    return products
        .map((p) => p.cost.amount)
        .reduce((prev, curr) =>
            Math.abs(curr - amount) < Math.abs(prev - amount) ? curr : prev
        );
}

export function computeItemFiresalePrice(
    item: ExtensionItem,
    firesale: NonNullable<ExtensionsDocument["firesale"]>,
    products: FiresaleProduct[]
): number | null {
    if (firesale.exemptItemIds && firesale.exemptItemIds.indexOf(item.uuid) !== -1) return null;
    const overridePercent = firesale.itemOverrides?.[item.uuid]?.discountPercent;
    const discountPercent = overridePercent ?? firesale.discountPercent;
    if (!discountPercent || discountPercent <= 0 || discountPercent >= 100) {
        if (!discountPercent) return null;
    }
    const raw = item.amount * (1 - discountPercent / 100);
    if (raw <= 0) return null;
    const snapped = findClosestPredefinedAmount(raw, products);
    if (snapped >= item.amount) return null;
    return snapped;
}

export function computeFiresaleState(
    extensionDoc: Pick<ExtensionsDocument, "list" | "firesale">,
    products: FiresaleProduct[],
    nowEpochSeconds: number = Date.now() / 1000
): FiresaleState {
    const firesale = extensionDoc.firesale;
    if (!firesale) return { active: false };
    const startedAt = firesale.startedAt ?? 0;
    const duration = firesale.durationSeconds ?? 0;
    if (!startedAt || !duration) return { active: false };
    const endsAt = startedAt + duration;
    if (nowEpochSeconds >= endsAt) return { active: false };

    const items: FiresaleStateActiveItem[] = [];
    for (const item of extensionDoc.list ?? []) {
        const firesalePrice = computeItemFiresalePrice(item, firesale, products);
        if (firesalePrice === null) continue;
        items.push({ uuid: item.uuid, firesalePrice });
    }

    return { active: true, endsAt, items, discountPercent: firesale.discountPercent, startedAt };
}
