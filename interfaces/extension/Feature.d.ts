import type { TTSFeatureExtension } from "../features/extension/TTS";
import type { PunishmentFeatureShared } from "../features/shared/Punishment";
import type { SoundFeatureShared } from "../features/shared/Sound";
// import type { TimeoutFeatureShared } from "../features/shared/Timeout";
import type { VideoFeatureShared } from "../features/shared/Video";

export type ExtensionFeature =
    | TTSFeatureExtension
    | SoundFeatureShared
    | VideoFeatureShared
    | PunishmentFeatureShared;
// export type ExtensionFeatureType = "tts" | "video" | "sound" | "timeout";
