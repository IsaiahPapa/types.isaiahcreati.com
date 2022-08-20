import type { FeatureInterface } from "../index";

export interface CommercialFeatureRewardSettings {
    length: 30 | 60 | 90 | 120 | 150 | 180;
}

export interface CommercialFeatureReward extends FeatureInterface {
    type: "commercial";
    settings: CommercialFeatureRewardSettings;
}
