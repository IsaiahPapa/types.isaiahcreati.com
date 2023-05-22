import { FeatureInterface } from "../index";

export interface RandomMediaFeatureExtensionSettings {
    user_can_choose_voice: boolean;
    allowed_voices: string[];
}

export interface RandomMediaFeatureExtension extends FeatureInterface {
    type: "randommedia";
    settings: RandomMediaFeatureExtensionSettings;
}
