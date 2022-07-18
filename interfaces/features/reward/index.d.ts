import { SoundFeatureShared } from "../shared/Sound";
import { TimeoutFeatureShared } from "../shared/Timeout";
import { TTSFeatureShared } from "../shared/TTS";
import { VideoFeatureShared } from "../shared/Video";
import { ChatMessageFeatureReward } from "./ChatMessage";
import { ChatModeFeatureReward } from "./ChatMode";
import { CommercialFeatureReward } from "./Commercial";
import { PlaySoundFeatureReward } from "./PlaySound";
import { PlayVideoFeatureReward } from "./PlayVideo";
import { PollFeatureReward } from "./Poll";
import { PredictionFeatureReward } from "./Prediction";

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
