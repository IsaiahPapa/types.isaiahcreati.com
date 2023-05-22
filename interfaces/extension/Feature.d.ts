import { RandomMediaFeatureExtension } from "../features/extension/RandomMedia";
import { TTSFeatureExtension } from "../features/extension/TTS";
import { PunishmentFeatureShared } from "../features/shared/Punishment";
import { SoundFeatureShared } from "../features/shared/Sound";
// import { TimeoutFeatureShared } from "../features/shared/Timeout";
import { VideoFeatureShared } from "../features/shared/Video";

export type ExtensionFeature =
    | TTSFeatureExtension
    | SoundFeatureShared
    | VideoFeatureShared
    | PunishmentFeatureShared
    | RandomMediaFeatureExtension;
// export type ExtensionFeatureType = "tts" | "video" | "sound" | "timeout";
