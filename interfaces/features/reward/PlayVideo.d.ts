import { FeatureInterface } from "../index";
import { SettingPosition, SettingSize } from "../../alerts/index";

export interface PlayVideoFeatureRewardSettings {
    type: string;
    list: any[];
    position: SettingPosition;
    size: SettingSize;
}
export interface PlayVideoFeatureReward extends FeatureInterface {
    type: "playvideo";
    settings: PlayVideoFeatureRewardSettings;
}
