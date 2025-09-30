import { RewardAddEvent } from "../../api/twitch/eventsub/ChannelPoints";
import { ChannelPointReward } from "../../rewards/index";

export type ChannelPointRewardExtendedType = ChannelPointReward & {
    createdAt?: number;
    updatedAt?: number;
    lastRedeemedAt?: number;
    count?: number;
    manageable?: boolean;
};

export type ChannelPointRewardEventExtendedType = RewardAddEvent & {
    createdAt?: number;
    updatedAt?: number;
    lastRedeemedAt?: number;
    count?: number;
    manageable?: boolean;
};

export interface RewardsDocument {
    _id: any;
    uuid4: string;
    rewards: (ChannelPointRewardExtendedType | ChannelPointRewardEventExtendedType)[];
}

export default RewardsDocument;
