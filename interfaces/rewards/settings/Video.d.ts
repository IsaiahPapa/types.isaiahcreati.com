import { SettingPosition, SettingSize } from "../../alerts/index";
import { MediaListItem } from "../../Media";

export interface VideoSettings {
    type: "single" | "multi" | "random" | "personal";
    list: MediaListItem[];
    position: SettingPosition;
    size: SettingSize;
}