import { SoundFeatureShared } from "../features/shared/Sound";
import { TimeoutFeatureShared } from "../features/shared/Timeout";
import { TTSFeatureShared } from "../features/shared/TTS";
import { VideoFeatureShared } from "../features/shared/Video";

export type ExtensionFeature =
    | TTSFeatureShared
    | SoundFeatureShared
    | VideoFeatureShared
    | TimeoutFeatureShared;
export type ExtensionFeatureType = "tts" | "video" | "sound" | "timeout";
