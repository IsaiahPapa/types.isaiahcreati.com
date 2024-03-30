import { FeatureInterface } from "../index";

export interface BoxFeatureExtensionSettings {
    id: string;
}

export interface BoxFeatureExtension extends FeatureInterface {
    type: "box";
    settings: BoxFeatureExtensionSettings;
}

export type Box = {
    id: string;
    name: string;
    description: string;
    media: {
        unopenedImageUrl: string; // Image for the unopened box
        openedImageUrl: string; // Image for the opened box
        unboxAnimationUrl?: string; // Optional URL to a webm video for the unboxing animation
    };
    contents: BoxItem[];
};

type BoxItemBase = {
    id: string;
    name: string;
    type: string;
    rarity: Rarity;
    settings: unknown;
};

interface SoundItemBox extends BoxItemBase {
    type: "sound";
    settings: {
        shortId: string;
    };
}

export type BoxItem = SoundItemBox;

export type Rarity = "blue" | "red" | "pink" | "yellow";