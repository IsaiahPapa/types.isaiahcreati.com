import type { TwitchAPIImage } from "../../../rewards/index";

type RewardRedemptionStatusType = "unknown" | "unfulfilled" | "fulfilled" | "canceled";

export interface RewardRedemptionInterface {
    id: string;
    title: string;
    cost: number;
    prompt: string;
}

interface MaxPerStreamInterface {
    is_enabled: boolean;
    value: number;
}

interface MaxPerUserPerStreamInterface {
    is_enabled: boolean;
    value: number;
}

interface GlobalCooldownInterface {
    is_enabled: boolean;
    value: number;
}

export interface RewardAddEvent {
    id: string;
    broadcaster_user_id: string;
    broadcaster_user_login: string;
    broadcaster_user_name: string;
    is_enabled: boolean;
    is_paused: boolean;
    is_in_stock: boolean;
    title: string;
    cost: number;
    prompt: string;
    is_user_input_required: boolean;
    should_redemptions_skip_request_queue: boolean;
    max_per_stream: MaxPerStreamInterface;
    max_per_user_per_stream: MaxPerUserPerStreamInterface;
    background_color: string;
    image: TwitchAPIImage | null;
    default_image: TwitchAPIImage;
    global_cooldown: GlobalCooldownInterface;
    cooldown_expires_at: null | string | Date;
    redemptions_redeemed_current_stream: number | null;
}


//The types are the same (for now)
export type RewardUpdateEvent = RewardAddEvent;
export type RewardRemoveEvent = RewardAddEvent;

export interface RewardRedemptionEvent {
    id: string;
    broadcaster_user_id: string;
    broadcaster_user_login: string;
    broadcaster_user_name: string;
    user_id: string;
    user_login: string;
    user_name: string;
    user_input: string;
    status: RewardRedemptionStatusType;
    reward: RewardRedemptionInterface;
    redeemed_at: string;
}

export interface RewardRedemptionUpdateEvent {
    id: string;
    broadcaster_user_id: string;
    broadcaster_user_login: string;
    broadcaster_user_name: string;
    user_id: string;
    user_login: string;
    user_name: string;
    user_input: string;
    status: "fulfilled" | "canceled";
    reward: RewardRedemptionInterface;
    redeemed_at: string;
}
