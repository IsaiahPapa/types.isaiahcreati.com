import type { SoundFeatureShared } from "./Sound";
import type { TimeoutFeatureShared } from "./Timeout";
import type { TTSFeatureShared } from "./TTS";
import type { VideoFeatureShared } from "./Video";

export type SharedFeatureType =
    | SoundFeatureShared
    | VideoFeatureShared
    | TimeoutFeatureShared
    | TTSFeatureShared;

    