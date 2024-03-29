interface ChatModeSettingsOnly {
    mode: "sub" | "emote" | "follower";
    duration: number;
    length?: number;
}

interface ChatModeSettingsSlow {
    mode: "slow";
    duration: number;
    length: number;
}

// New Chat Mode Idea (chant mode)
// Only a specific word for x amount of seconds

export type ChatModeSettings = ChatModeSettingsOnly | ChatModeSettingsSlow;
