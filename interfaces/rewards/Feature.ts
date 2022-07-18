import { PunishmentFeatureShared } from "../features/shared/Punishment";
import { SoundFeatureShared } from "../features/shared/Sound";
import { TimeoutFeatureShared } from "../features/shared/Timeout";
import { TTSFeatureShared } from "../features/shared/TTS";
import { VideoFeatureShared } from "../features/shared/Video";
import { ChatMessageSettings } from "./settings/ChatMessage";
import { ChatModeSettings } from "./settings/ChatMode";
import { CommercialSettings } from "./settings/Commercial";
import { OBSSettings } from "./settings/OBS";
import { PlaySoundSettingsDepreciated } from "./settings/PlaySound";
import { PlayVideoSettingsDepreciated } from "./settings/PlayVideo";
import { PollSettings } from "./settings/Poll";
import { Prediction } from "./settings/Prediction";
import { RefundRewardSettings } from "./settings/RefundReward";
import { RunCommandSettings } from "./settings/RunCommand";
import { ShowEmoteSettings } from "./settings/ShowEmote";
import { SkipMediaSettings } from "./settings/SkipMedia";
import { SoundSettings } from "./settings/Sound";
import { TTSSettings } from "./settings/TTS";
import { UpdateRewardSettings } from "./settings/UpdateReward";
import { UpdateRewardV2Settings } from "./settings/UpdateRewardV2";
import { VideoSettings } from "./settings/Video";
import { WheelSpinnerSettings } from "./settings/WheelSpinner";

/*
 * Feature Types
 */

// export default Feature;

// export type PlaySoundFeature = Feature.PlaySoundFeature;
// export type PlayVideoFeature = Feature.PlayVideoFeature;
// export type RunCommandFeature = Feature.RunCommandFeature;
// export type ShowEmoteFeature = Feature.ShowEmoteFeature;
// export type TTSFeature = Feature.TTSFeature;
// export type SoundFeature = Feature.SoundFeature;
// export type VideoFeature = Feature.VideoFeature;
// // export type TimeoutFeature = Feature.TimeoutFeature;
// export type UpdateRewardFeature = Feature.UpdateRewardFeature;
// export type PredictionFeature = Feature.PredictionFeature;
// export type WheelSpinnerFeature = Feature.WheelSpinnerFeature;
// export type PollFeature = Feature.PollFeature;

export type Feature =
    | TTSFeatureShared
    | SoundFeatureShared
    | VideoFeatureShared
    | TimeoutFeatureShared
    | PunishmentFeatureShared
    | PlaySoundFeature
    | PlayVideoFeature
    | PredictionFeature
    | RunCommandFeature
    | ShowEmoteFeature
    | UpdateRewardFeature
    | WheelSpinnerFeature
    | PollFeature
    | ChatMessageFeature
    | ChatModeFeature
    | UpdateRewardV2Feature
    | RefundRewardFeature
    | SkipMediaFeature
    | OBSFeature
    | CommercialFeature;

// export type ExtractFeature<T extends Feature["type"]> = Extract<Feature, { type: T }>;
export type FeatureExtractSettings<T extends Feature["type"]> = Extract<Feature["settings"], { type: T }>;

export interface PlaySoundFeature {
    id: string;
    type: "playsound";
    settings: PlaySoundSettingsDepreciated;
}
export interface PlayVideoFeature {
    id: string;
    type: "playvideo";
    settings: PlayVideoSettingsDepreciated;
}
export interface ShowEmoteFeature {
    id: string;
    type: "showemote";
    settings: ShowEmoteSettings;
}
export interface TTSFeature {
    id: string;
    type: "tts";
    settings: TTSSettings;
}
export interface SoundFeature {
    id: string;
    type: "sound";
    settings: SoundSettings;
}
export interface VideoFeature {
    id: string;
    type: "video";
    settings: VideoSettings;
}
export interface UpdateRewardFeature {
    id: string;
    type: "updatereward";
    settings: UpdateRewardSettings;
}
export interface WheelSpinnerFeature {
    id: string;
    type: "wheelspinner";
    settings: WheelSpinnerSettings;
}
export interface PredictionFeature {
    id: string;
    type: "prediction";
    settings: Prediction;
}
export interface PollFeature {
    id: string;
    type: "poll";
    settings: PollSettings;
}

export interface RunCommandFeature {
    id: string;
    type: "runcommand";
    settings: RunCommandSettings;
}
//Derivative features extrapolated from RunCommand
// export interface TimeoutFeature {
//     id: string;
//     type: "timeout";
//     settings: TimeoutSettings;
// }

// export interface BanFeature {
//     id: string;
//     type: "ban";
//     settings: BanSettings;
// }

export interface ChatMessageFeature {
    id: string;
    type: "chatMessage";
    settings: ChatMessageSettings;
}

export interface ChatModeFeature {
    id: string;
    type: "chatMode";
    settings: ChatModeSettings;
}

export interface UpdateRewardV2Feature {
    id: string;
    type: "updateRewardV2";
    settings: UpdateRewardV2Settings;
}

export interface RefundRewardFeature {
    id: string;
    type: "refundReward";
    settings: RefundRewardSettings;
}

export interface SkipMediaFeature {
    id: string;
    type: "skipMedia";
    settings: SkipMediaSettings;
}

export interface OBSFeature {
    id: string;
    type: "obs";
    settings: OBSSettings;
}

export interface CommercialFeature {
    id: string;
    type: "commercial";
    settings: CommercialSettings;
}
