import type { MediaListItem } from "../../Media";
import type { FeatureInterface } from "../index";

export interface SoundFeatureSharedSettings {
    type: "single" | "multi" | "random" | "personal";
    queue: boolean;
    list: MediaListItem[];
}

export interface SoundFeatureShared extends FeatureInterface {
    type: "sound";
    settings: SoundFeatureSharedSettings;
}
