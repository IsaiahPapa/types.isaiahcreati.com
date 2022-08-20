import type { SoundFeatureShared } from "../shared/Sound";
import type { TTSFeatureShared } from "../shared/TTS";
import type { VideoFeatureShared } from "../shared/Video";
import type { ChatMessageFeatureReward } from "./ChatMessage";
import type { ChatModeFeatureReward } from "./ChatMode";
import type { CommercialFeatureReward } from "./Commercial";
import type { PlaySoundFeatureReward } from "./PlaySound";
import type { PlayVideoFeatureReward } from "./PlayVideo";
import type { PollFeatureReward } from "./Poll";
import type { TimeoutFeatureShared } from "../shared/Timeout";
import type { PredictionFeatureReward } from "./Prediction";

export type RewardFeatureType =
    | PlaySoundFeatureReward
    | PlayVideoFeatureReward
    | TTSFeatureShared
    | TimeoutFeatureShared
    | VideoFeatureShared
    | SoundFeatureShared
    | ChatMessageFeatureReward
    | ChatModeFeatureReward
    | CommercialFeatureReward
    | PollFeatureReward
    | PredictionFeatureReward;
