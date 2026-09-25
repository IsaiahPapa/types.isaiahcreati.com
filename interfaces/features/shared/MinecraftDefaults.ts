// Types and interfaces for the Minecraft Integration feature.
// Runtime constants (default catalogs, price tier tables) live in the
// consuming repos (api.isaiahcreati.com, bot.isaiahcreati.com) to avoid
// webpack issues with importing .ts runtime values from the types repo.

import { MinecraftIntegrationFeatureSettings } from "./Minecraft";
import { ExtensionItem } from "../../extension/ExtensionItem";
export type { BuffEntry } from "./Buff";

export type PriceTier = "small" | "medium" | "large";
export type MobSet = "tame" | "normal" | "crazy";

// Catalog definition types — used in minecraftData.ts to define default
// catalogs (DEFAULT_MOBS_TAME, DEFAULT_TAUNTS, etc.). NOT stored in
// MinecraftExtensionConfig — that uses extensionItems: ExtensionItem[].
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

export interface CPRewardDefinition {
    id: string;
    title: string;
    cost: number;
    type: "mob" | "taunt" | "visual" | "minigame" | "buff";
    action: MinecraftIntegrationFeatureSettings;
    isCustom: boolean;
    enabled: boolean;
}

export interface MinecraftExtensionConfig {
    enabled: boolean;
    paused?: boolean;
    priceTier: PriceTier;
    mobSet: MobSet;
    extensionItems: ExtensionItem[];
    channelPoints: {
        mode: boolean;
        rewardDefinitions: CPRewardDefinition[];
    };
}