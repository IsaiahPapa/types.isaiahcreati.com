import { RandomMediaFeatureExtension } from "../features/extension/RandomMedia";
import { TTSFeatureExtension } from "../features/extension/TTS";
import { PunishmentFeatureShared } from "../features/shared/Punishment";
import { SoundFeatureShared } from "../features/shared/Sound";
import { FiresaleFeatureExtension } from "../features/extension/Firesale";
import { VideoFeatureShared } from "../features/shared/Video";
import { BoxFeatureExtension } from "../features/extension/Box";
import { PopFeatureShared } from "../features/shared/Pops";

export type ExtensionFeature =
    | TTSFeatureExtension
    | SoundFeatureShared
    | VideoFeatureShared
    | PunishmentFeatureShared
    | RandomMediaFeatureExtension
    | FiresaleFeatureExtension
    | BoxFeatureExtension
    | PopFeatureShared;

// export type ExtensionFeatureType = "tts" | "video" | "sound" | "timeout";
