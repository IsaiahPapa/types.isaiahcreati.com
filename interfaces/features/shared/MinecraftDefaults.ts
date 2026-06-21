// Types and interfaces for the Minecraft Integration feature.
// Runtime constants (default catalogs, price tier tables) live in the
// consuming repos (api.isaiahcreati.com, bot.isaiahcreati.com) to avoid
// webpack issues with importing .ts runtime values from the types repo.

import { MinecraftIntegrationFeatureSettings } from "./Minecraft";

export type PriceTier = "small" | "medium" | "large";
export type MobSet = "tame" | "normal" | "crazy";

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
    type: "mob" | "taunt" | "minigame";
    action: MinecraftIntegrationFeatureSettings;
    isCustom: boolean;
    enabled: boolean;
}

export interface MinecraftExtensionConfig {
    enabled: boolean;
    priceTier: PriceTier;
    mobSet: MobSet;
    extension: {
        mobs: MobEntry[];
        taunts: TauntEntry[];
        minigames: MinigameEntry[];
    };
    channelPoints: {
        mode: boolean;
        rewardDefinitions: CPRewardDefinition[];
    };
}

// Flat projection of MinecraftExtensionConfig for the extension frontend.
// The EBS GET /api/extension response hydrates this from the integrations
// collection — the extension frontend doesn't see channelPoints or the
// nested `extension` sub-object, just the flat bits config.
export interface MinecraftExtensionFlatConfig {
    enabled: boolean;
    priceTier: PriceTier;
    mobSet: MobSet;
    mobs: MobEntry[];
    taunts: TauntEntry[];
    minigames: MinigameEntry[];
}