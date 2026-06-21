import { MobModifier } from "./MobModifier";

export interface ModifierCatalogEntry {
    id: string;
    displayName: string;
    cost: number;
    appliesTo: ("integration:minecraft")[];
    modifier: MobModifier;
    exclusiveWith?: string[];
}