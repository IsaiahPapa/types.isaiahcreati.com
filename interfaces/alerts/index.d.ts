import { MediaListItem } from "../Media";

export interface SettingPosition {
    x: string; //px
    y: string; //px
}
export interface SettingSize {
    w: string; //px
    h: string; //px
}

export interface AlertPayload {
    type: string;
    version: string;
    data: any;
    // [key: string]: any;
}

export interface AlertPayloadTts extends AlertPayload {
    type: "tts";
    data: {
        volume: number;
        voice: string;
        message: string;
    };
}

export interface AlertPayloadTtsExtension extends AlertPayload {
    type: "tts_ext";
    data: {
        transactionId: string;
        volume: number;
    };
}

export interface AlertPayloadSound extends AlertPayload {
    type: "sound";
    data: {
        queue: boolean;
        media: MediaListItem;
    };
}

export interface AlertPayloadVideo extends AlertPayload {
    type: "video";
    data: {
        size: SettingSize;
        position: SettingPosition;
        media: MediaListItem;
    };
}

export interface AlertPayloadPlaySound extends AlertPayload {
    type: "playsound";
    settings: any;
}
export interface AlertPayloadPlayVideo extends AlertPayload {
    type: "playvideo";
    settings: any;
}

export interface AlertPayloadShowEmote extends AlertPayload {
    type: "showemote";
    data: {
        emotes: any[];
        limit: number;
        showtime: number;
        fadetime: number;
    };
}

export type AlertPayloads =
    | AlertPayloadTts
    | AlertPayloadTtsExtension
    | AlertPayloadSound
    | AlertPayloadVideo
    | AlertPayloadPlayVideo
    | AlertPayloadPlaySound
    | AlertPayloadShowEmote;
