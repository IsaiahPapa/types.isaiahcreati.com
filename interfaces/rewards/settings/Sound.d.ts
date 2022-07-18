import { MediaListItem } from "../../Media";

export interface SoundSettings {
    type: "single" | "multi" | "random" | "personal";
    queue: boolean;
    list: MediaListItem[];
}
