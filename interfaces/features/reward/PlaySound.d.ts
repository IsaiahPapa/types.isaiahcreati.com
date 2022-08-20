import type { FeatureInterface } from "../index";
export interface PlaySoundFeatureRewardSettings {
    type: string;
    list: any[];
}

export interface PlaySoundFeatureReward extends FeatureInterface {
    type: "playsound";
    settings: PlaySoundFeatureRewardSettings;
}
