import ExtensionsDocument from "../database/bot-isaiahcreati-com/ExtensionsDocument";
import { Interaction } from "../extension/Interaction";
import { PunishmentFeatureSharedSettings } from "../features/shared/Punishment";
import { MediaListItem } from "../Media";
import { PlaySoundSettingsDepreciated } from "../rewards/settings/PlaySound";
import { PlayVideoSettingsDepreciated } from "../rewards/settings/PlayVideo";

export interface SettingPosition {
    x: string; //px
    y: string; //px
}
export interface SettingSize {
    w: string; //px
    h: string; //px
}

//Feature payload Data

export interface AlertPayloadTtsRewards {
    type: "tts";
    settings: {
        volume: number;
        voice: string;
        message: string;
    };
}

export interface AlertPayloadTtsExtension {
    type: "tts";
    settings: {
        transactionId: string;
        volume: number;
    };
}

export interface AlertPayloadSound {
    type: "sound";
    settings: {
        queue: boolean;
        media: MediaListItem;
    };
}

export interface AlertPayloadVideo {
    type: "video";
    settings: {
        size: SettingSize;
        position: SettingPosition;
        media: MediaListItem;
    };
}

export interface AlertPayloadPlaySound {
    type: "playsound";
    data: {
        file_url: string;
        volume: string | number;
    };
    settings: PlaySoundSettingsDepreciated;
}
export interface AlertPayloadPlayVideo {
    type: "playvideo";
    data: {
        file_url: string;
        volume: string | number;
    };
    settings: PlayVideoSettingsDepreciated;
}

export interface AlertPayloadShowEmote {
    type: "showemote";
    settings: {
        emotes: any[];
        limit: number;
        showtime: number;
        fadetime: number;
        size: number;
    };
}

export interface AlertPayloadPunishment {
    type: "punishment";
    settings: {
        duration: PunishmentFeatureSharedSettings["duration"];
        mode: PunishmentFeatureSharedSettings["mode"];
    };
}

//Actual payloads

export interface DefaultAlertPayload {
    version: string;
    module: "rewards" | "extension";
}

export interface AlertPayloadRewards extends DefaultAlertPayload {
    version: string;
    module: "rewards";
    data:
        | AlertPayloadTtsRewards
        | AlertPayloadSound
        | AlertPayloadVideo
        | AlertPayloadPlayVideo
        | AlertPayloadPlaySound
        | AlertPayloadShowEmote;
    info: {};
}
export interface AlertPayloadExtension extends DefaultAlertPayload {
    version: string;
    module: "extension";
    data: AlertPayloadTtsExtension | AlertPayloadSound | AlertPayloadVideo | AlertPayloadPunishment;
    info: {
        username: string;
        amount: number;
        interaction: Interaction;
        theme: ExtensionsDocument["theme"];
        notification: ExtensionsDocument["notification"];
    };
}
