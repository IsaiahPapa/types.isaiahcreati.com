import { RewardAddEvent } from "../../api/twitch/eventsub/ChannelPoints";
import { ChannelPointReward } from "../../rewards/index";

export type ChannelPointRewardExtendedType = ChannelPointReward & {
    count?: number;
    manageable?: boolean;
    source?: string;
};

export type ChannelPointRewardEventExtendedType = RewardAddEvent & {
    count?: number;
    manageable?: boolean;
    source?: string;
};

export interface RewardsDocument {
    _id: any;
    uuid4: string;
    rewards: (ChannelPointRewardExtendedType | ChannelPointRewardEventExtendedType)[];
}

export default RewardsDocument;
