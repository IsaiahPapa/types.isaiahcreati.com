import { SettingPosition, SettingSize } from "../../alerts/index";
import { MediaListItem } from "../../Media";
import { FeatureInterface } from "../index";

export interface VideoFeatureSharedSettings {
    type: "single" | "multi" | "random" | "personal";
    list: MediaListItem[];
    position: SettingPosition;
    size: SettingSize;
}

export interface VideoFeatureShared extends FeatureInterface {
    type: "video";
    settings: VideoFeatureSharedSettings;
}
