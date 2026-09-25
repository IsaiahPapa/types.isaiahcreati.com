import { ModifierCatalogEntry } from "./ModifierCatalog";

export interface MinecraftManifestCategory {
    key: string;
    title: string;
    icon: string;
    spin?: string;
    searchPlaceholder?: string;
    actionLabel?: string;
}

export interface MinecraftManifestMob {
    mobId: string;
    displayName: string;
    price: number;
    quantity: number;
    modifiersEnabled: boolean;
    icon: string;
    spin?: string;
}

export interface MinecraftManifestTaunt {
    tauntId: string;
    displayName: string;
    price: number;
    description: string;
    icon: string;
}

export interface MinecraftManifestVisual {
    tauntId: string;
    displayName: string;
    price: number;
    description: string;
    icon: string;
}

export interface MinecraftManifestMinigame {
    id: string;
    displayName: string;
    price: number;
    description: string;
    icon: string;
}

export interface MinecraftManifestBuff {
    buffId: string;
    displayName: string;
    description: string;
    duration: number;
    price: number;
    icon: string;
}

export interface MinecraftManifest {
    version: number;
    categories: MinecraftManifestCategory[];
    mobs: MinecraftManifestMob[];
    taunts: MinecraftManifestTaunt[];
    visuals: MinecraftManifestVisual[];
    minigames: MinecraftManifestMinigame[];
    buffs: MinecraftManifestBuff[];
    modifiers: ModifierCatalogEntry[];
    tierMobIds: {
        tame: string[];
        normal: string[];
        crazy: string[];
    };
    visualEffectIds: string[];
    curatedCpIds: string[];
}