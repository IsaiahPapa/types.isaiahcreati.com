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
    alerts?: {
        enabled: boolean;
        position: {
            x: number;
            y: number;
        };
        positionRegion: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    };
    rewards: (ChannelPointRewardExtendedType | ChannelPointRewardEventExtendedType)[];
}

export default RewardsDocument;
