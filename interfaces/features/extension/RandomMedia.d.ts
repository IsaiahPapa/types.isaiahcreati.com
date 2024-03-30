import { FeatureInterface } from "../index";

export interface RandomMediaFeatureExtensionSettings {
    mediaType: "sound" | "video";
}

export interface RandomMediaFeatureExtension extends FeatureInterface {
    type: "randomMedia";
    settings: RandomMediaFeatureExtensionSettings;
}
