import type { SettingPosition, SettingSize } from "../../alerts/index";

export interface PlayVideoSettingsDepreciated {
    type: string,
    list: any[],
    position: SettingPosition,
    size: SettingSize,
}