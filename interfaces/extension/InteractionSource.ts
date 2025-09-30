export const InteractionSource = {
    PANEL: "panel",
    MOBILE: "mobile",
    VIDEO: "video_component"
} as const;

export type InteractionSourceType = typeof InteractionSource[keyof typeof InteractionSource];