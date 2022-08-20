import type { FeatureInterface } from "../index";

interface ChatMessageSettingsCustom {
    preset: "custom";
    message: string;
}

interface ChatMessageSettingsPreDefined {
    preset: "fortune" | "followAge" | "magicBall";
    message?: string;
}

export type ChatMessageFeatureRewardSettings = ChatMessageSettingsCustom | ChatMessageSettingsPreDefined;

export interface ChatMessageFeatureReward extends FeatureInterface {
    type: "chatMessage";
    settings: ChatMessageFeatureRewardSettings;
}
