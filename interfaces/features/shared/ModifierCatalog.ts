import { MobModifier } from "./MobModifier";

export interface ModifierCatalogEntry {
    id: string;
    displayName: string;
    cost: number;
    appliesTo: ("integration:minecraft")[];
    modifier: MobModifier;
    exclusiveWith?: string[];
}

export const MODIFIER_CATALOG: ModifierCatalogEntry[] = [
    {
        id: "baby",
        displayName: "Baby",
        cost: 5,
        appliesTo: ["integration:minecraft"],
        modifier: { kind: "baby" },
    },
    {
        id: "speed",
        displayName: "Speed",
        cost: 10,
        appliesTo: ["integration:minecraft"],
        modifier: { kind: "speed", multiplier: 1.8 },
    },
    {
        id: "kb_stick",
        displayName: "Knockback Stick",
        cost: 15,
        appliesTo: ["integration:minecraft"],
        modifier: {
            kind: "equipment",
            slot: "mainhand",
            itemId: "minecraft:stick",
            enchantments: [{ id: "minecraft:knockback", level: 5 }],
        },
    },
    {
        id: "sharp_sword",
        displayName: "Sharpness Sword",
        cost: 20,
        appliesTo: ["integration:minecraft"],
        modifier: {
            kind: "equipment",
            slot: "mainhand",
            itemId: "minecraft:iron_sword",
            enchantments: [{ id: "minecraft:sharpness", level: 5 }],
        },
    },
    {
        id: "big",
        displayName: "Big",
        cost: 25,
        appliesTo: ["integration:minecraft"],
        modifier: { kind: "scale", value: 3.0 },
        exclusiveWith: ["tiny"],
    },
    {
        id: "tiny",
        displayName: "Tiny",
        cost: 25,
        appliesTo: ["integration:minecraft"],
        modifier: { kind: "scale", value: 0.25 },
        exclusiveWith: ["big"],
    },
    {
        id: "diamond_armor",
        displayName: "Diamond Armor",
        cost: 50,
        appliesTo: ["integration:minecraft"],
        modifier: {
            kind: "equipment",
            slot: "chest",
            itemId: "minecraft:diamond_chestplate",
        },
    },
];