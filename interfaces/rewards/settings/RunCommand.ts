export const enum CommandType {
    Timeout = "timeout",
    SlowMode = "slowmode",
    SubMode = "submode",
    EmoteMode = "emotemode",
    RunAd = "runad",
    FollowAge = "followage",
    Fortune = "fortune",
    MagicBall = "magicball",
    ChatMsg = "chatmsg",
    SkipTts = "skiptts",
    Refund = "refund",
}

/*
 *   TIMEOUT
 */

export interface RunCommandSettingsTimeout {
    command: "timeout";
    features: {
        duration: number;
    };
}

/*
 *   Slow Mode
 */
export interface RunCommandSettingsSlowMode {
    command: "slowmode";
    features: {
        length: number;
        duration: number;
    };
}

/*
 *   Sub Mode
 */
export interface RunCommandSettingsSubMode {
    command: "submode";
    features: {
        duration: number;
    };
}
/*
 *   Emote Mode
 */
export interface RunCommandSettingsEmoteMode {
    command: "emotemode";
    features: {
        duration: number;
    };
}
/*
 *   Run Ad
 */
export interface RunCommandSettingsRunAd {
    command: "runad";
    features: {
        length: 30 | 60 | 90 | 120 | 150 | 180;
    };
}

/*
 *   Follow Age
 */
export interface RunCommandSettingsFollowAge {
    command: "followage";
    features: {};
}

/*
 *   Fortune
 */
export interface RunCommandSettingsFortune {
    command: "fortune";
    features: {};
}

/*
 *   Magic Ball
 */
export interface RunCommandSettingsMagicBall {
    command: "magicball";
    features: {};
}

/*
 *   Chat Message
 */
export interface RunCommandSettingsChatMsg {
    command: "chatmsg";
    features: {
        text: string;
    };
}

/*
 *   Skip TTS/Skip Media
 */
export interface RunCommandSettingsSkipTts {
    command: "skiptts";
    features: {};
}

/*
 *   Refund
 */
export interface RunCommandSettingsRefund {
    command: "refund";
    features: {};
}

/*
 *   Default
 */
export interface RunCommandSettingsDefault {
    command: "";
    features: {};
}

export type RunCommandSettings =
    | RunCommandSettingsTimeout
    | RunCommandSettingsSlowMode
    | RunCommandSettingsSubMode
    | RunCommandSettingsEmoteMode
    | RunCommandSettingsRunAd
    | RunCommandSettingsFollowAge
    | RunCommandSettingsFortune
    | RunCommandSettingsMagicBall
    | RunCommandSettingsChatMsg
    | RunCommandSettingsSkipTts
    | RunCommandSettingsRefund
    | RunCommandSettingsDefault;
