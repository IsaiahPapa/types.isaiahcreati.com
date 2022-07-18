type AnnouncementColorType = "blue" | "green" | "orange" | "purple" | "primary";

interface ChatMessageSettingsAnnouncement {
    preset: "announcement";
    message: string;
    color: AnnouncementColorType;
}
interface ChatMessageSettingsCustom {
    preset: "custom";
    message: string;
    color?: AnnouncementColorType;
}

interface ChatMessageSettingsPreDefined {
    preset: "fortune" | "followAge" | "magicBall";
    message?: string;
    color?: AnnouncementColorType;
}

export type ChatMessageSettings =
    | ChatMessageSettingsCustom
    | ChatMessageSettingsPreDefined
    | ChatMessageSettingsAnnouncement;
