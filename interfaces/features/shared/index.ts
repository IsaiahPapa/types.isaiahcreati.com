import { SoundFeatureShared } from "./Sound";
import { TimeoutFeatureShared } from "./Timeout";
import { TTSFeatureShared } from "./TTS";
import { VideoFeatureShared } from "./Video";

export type SharedFeatureType =
    | SoundFeatureShared
    | VideoFeatureShared
    | TimeoutFeatureShared
    | TTSFeatureShared;

    