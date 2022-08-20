import type { PunishmentFeatureShared } from "../features/shared/Punishment";
import type { SoundFeatureShared } from "../features/shared/Sound";
import type { TimeoutFeatureShared } from "../features/shared/Timeout";
import type { TTSFeatureShared } from "../features/shared/TTS";
import type { VideoFeatureShared } from "../features/shared/Video";
import type { ChatMessageSettings } from "./settings/ChatMessage";
import type { ChatModeSettings } from "./settings/ChatMode";
import type { CommercialSettings } from "./settings/Commercial";
import type { OBSSettings } from "./settings/OBS";
import type { PlaySoundSettingsDepreciated } from "./settings/PlaySound";
import type { PlayVideoSettingsDepreciated } from "./settings/PlayVideo";
import type { PollSettings } from "./settings/Poll";
import type { Prediction } from "./settings/Prediction";
import type { RefundRewardSettings } from "./settings/RefundReward";
import type { RunCommandSettings } from "./settings/RunCommand";
import type { ShowEmoteSettings } from "./settings/ShowEmote";
import type { SkipMediaSettings } from "./settings/SkipMedia";
import type { SoundSettings } from "./settings/Sound";
import type { TTSSettings } from "./settings/TTS";
import type { UpdateRewardSettings } from "./settings/UpdateReward";
import type { UpdateRewardV2Settings } from "./settings/UpdateRewardV2";
import type { VideoSettings } from "./settings/Video";
import type { VipFeatureSettings } from "./settings/VIP";
import type { WheelSpinnerSettings } from "./settings/WheelSpinner";

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
    | CommercialFeature
    | VipFeature;

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

export interface VipFeature {
    id: string;
    type: "vip";
    settings: VipFeatureSettings;
}
