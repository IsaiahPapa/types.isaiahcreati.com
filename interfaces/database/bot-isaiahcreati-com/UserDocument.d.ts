export interface UserDocument {
    _id: string;
    rank: string;
    isStreamer: boolean;
    botConnected: boolean;
    eventSubConnected: boolean;
    aws: { isUsingAws: boolean; access_key_id: string; access_key_secret: string };
    settings: {
        filter: string[];
        bannedUsers: string[];
    };
    twitch: {
        id: string;
        login: string;
        display_name: string;
        type: string;
        broadcaster_type: string;
        description: string;
        profile_image_url: string;
        offline_image_url: string;
        view_count: number;
        email: string;
        created_at: string | Date;
        access_token: string;
        refresh_token: string;
    };
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
    live: boolean;
    tts?: {
        monthy_usage: { [MonthYear: string]: { used_chars: number } };
    };
}
export default UserDocument;
