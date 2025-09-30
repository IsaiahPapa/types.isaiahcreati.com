import { FeatureInterface } from "../index";
import { SpatialAudioEvent } from "../../SpatialAudioEvent";

export interface PopSound {
    src: string;
    volume: number;
    spatial: false;
}

export type PopSoundType = PopSound | SpatialAudioEvent;

export interface Sticker {
    src: string;
    extension: string;
}

export interface Pop {
    id: string;
    name: string;
    description: string;
    categories: string;
    duration: number;
    sound: PopSoundType;
    sticker: Sticker;
    cost: {
        // -1 means disabled
        bits: number;
        points: number;
        suggestedCurrency: "bits" | "points"; //| "free"
    };
    usage: {
        bits: number;
        points: number;
    };
    game?: {
        id: string;
        iconUrl: string;
    };
}

export interface PopFeatureSettings {
    pop_id: string;
    sound: {
        enabled: boolean; // Default: true (sound is on)
        volume: number;
        sound_id: string,
            sound_source: "payloadcms" | "library",
    };
    placement: "random" | "redeemers_choice";
}

export interface PopFeatureShared extends FeatureInterface {
    type: "pop";
    settings: PopFeatureSettings;
}
