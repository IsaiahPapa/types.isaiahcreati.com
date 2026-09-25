import { MobModifier } from "./MobModifier";

export interface ModifierCatalogEntry {
    id: string;
    displayName: string;
    cost: number;
    appliesTo: string[];
    appliesToMobs?: string[];
    modifier: MobModifier;
    exclusiveWith?: string[];
}