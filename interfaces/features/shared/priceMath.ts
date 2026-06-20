import { MODIFIER_CATALOG } from "./ModifierCatalog";
import { REGISTERED_BIT_AMOUNTS } from "./BitAmounts";

const REGISTERED_SET = new Set(REGISTERED_BIT_AMOUNTS);

// Sum the costs of the given modifier IDs from the global catalog.
// Unknown IDs contribute 0 (validation should reject them upstream).
export function sumModifierCosts(modifierIds: string[]): number {
    let sum = 0;
    for (const id of modifierIds) {
        const entry = MODIFIER_CATALOG.find((m) => m.id === id);
        if (entry) sum += entry.cost;
    }
    return sum;
}

// Standard tier: base ≤ 500. Total = base + Σ(modifier costs).
// The total must land on a registered SKU (every multiple of 5 in 5–650).
// Because base is a curated multiple-of-5 ≤ 500 and all modifier costs are
// multiples of 5, the sum is always a multiple of 5 ≤ 650 — guaranteed to
// be in the grid. Returns null if somehow not found (shouldn't happen).
export function resolveStandardTotal(
    base: number,
    modifierIds: string[]
): number | null {
    const total = base + sumModifierCosts(modifierIds);
    return REGISTERED_SET.has(total) ? total : null;
}

// Premium tier: base > 500. Modifiers are free — total = base.
// Base is already a registered SKU, so no grid lookup needed.
export function resolvePremiumTotal(base: number): number {
    return base;
}

// Determine which tier a base price falls into.
export function isPremiumTier(base: number): boolean {
    return base > 500;
}

// Resolve the final total for a purchase given the base + selected modifiers.
// Standard tier: base + Σ(mods), resolved to grid.
// Premium tier: base (modifiers free).
export function resolveTotal(
    base: number,
    modifierIds: string[]
): number | null {
    if (isPremiumTier(base)) {
        return resolvePremiumTotal(base);
    }
    return resolveStandardTotal(base, modifierIds);
}