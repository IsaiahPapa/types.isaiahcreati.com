import { ChannelPointReward } from "../../rewards/index";

export interface DiscordAccount {
    id: string;
    username: string;
    discriminator: string;
    avatarHash: string;
    email: string;
    locale: string;
    mfaEnabled: boolean;
    imageUrl: string;
    provider: string;
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresIn: number;
    scope: string;
}

export type OnboardingStatus =
    | "not_started"
    | "in-progress"
    | "skipped"
    | "completed";

export interface StepSkipInfo {
    timestamp: Date;
    reason: string; // e.g., 'user_choice', 'already installed', 'api_error:rewards_analysis', etc.
    error_message?: string; // Optional: store the actual error message
}

export interface UserFlags {
    welcomeOnboardingComplete?: OnboardingStatus;
    extensionOnboardingStatus?: OnboardingStatus;
    onboardingExtension?: {
        status?: OnboardingStatus;
        // Key timestamps for the overall flow
        first_opened_at?: Date; // Set only once on the first impression
        last_opened_at?: Date; // Updated every time the modal is shown
        completed_at?: Date; // Set only once when the flow is successfully finished

        installed_at?: Date;
        activated_at?: Date;
        swapped_for?: {
            name: string;
            id: string;
            version: string;
        };

        skipped: {
            installation?: StepSkipInfo;
            activation?: StepSkipInfo;
        };
    };
    onboardingRewards?: {
        status?: OnboardingStatus;

        // Key timestamps for the overall flow
        first_opened_at?: Date; // Set only once on the first impression
        last_opened_at?: Date; // Updated every time the modal is shown
        completed_at?: Date; // Set only once when the flow is successfully finished

        // Timestamps for specific steps in the funnel
        sound_reward_created_at?: Date;
        tts_reward_created_at?: Date;

        // Details about any step that was skipped
        skipped_steps?: {
            sound_reward_creation?: StepSkipInfo;
            tts_upsell?: StepSkipInfo;
        };

        hasAddedBrowserSource?: boolean;
        soundRewardId?: ChannelPointReward["id"];
        hasTestedSound?: boolean;
        ttsRewardId?: ChannelPointReward["id"];
    };
}

export interface UserDocument {
    _id: string;
    rank: string;
    uuid4: string;
    isStreamer?: boolean;
    botConnected?: boolean;
    eventSubConnected?: boolean;
    DiscordWelcomeMessageSent?: boolean;
    scopes?: string[];
    aws: {
        isUsingAws: boolean;
        access_key_id: string;
        access_key_secret: string;
    };
    settings: {
        filter: string[];
        bannedUsers: string[];
    };
    flags?: UserFlags;
    kick?: {
        id: number,
        user_id: number,

        name: string,
        email: string,
        profile_picture: string,

        login: string,
        username: string,

        access_token: string,
        refresh_token: string
    }
    twitch: {
        id: string;
        login: string;
        display_name: string;
        type: "" | "admin" | "global_mod" | "staff";
        broadcaster_type: "" | "affiliate" | "partner";
        description: string;
        profile_image_url: string;
        offline_image_url: string;
        view_count?: number;
        email: string;
        created_at: string | Date;
        access_token: string;
        refresh_token: string;
        follow_count?: number;
    };
    discord?: DiscordAccount;
    stripe: {
        status: string;
        paid: boolean;
        period_start: number | Date;
        period_end: number | Date;
        customer: string;
        subscription: string;
    };
    paypal: {
        status: string;
        paid: boolean;
        period_start: number | Date;
        period_end: number | Date;
        customer: string;
        subscription: string;
    };
    live?: boolean;
    tts?: {
        monthy_usage: { [MonthYear: string]: { used_chars: number } };
    };
    media?: {
        monthly_usage: { [MonthYear: string]: { plays: number; last_limit_message?: number } };
    };
    welcomeOnboardingComplete?: boolean;
    extensionOnboardingComplete?: boolean;
    subscriptions?: { type: string; status: string }[];
    lastLogin?: number;
    lastConnection?: Date;
    banned?: {
        reason: string;
        lifted: boolean;
        dateEpoch: number;
    }
}
export default UserDocument;
