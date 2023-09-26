import { SettingPosition } from "../../alerts/index";
import { ExtensionItem } from "../../extension/ExtensionItem";
type ExtensionThemes = "blue" | "red" | "orange" | "purple" | "green";

export type PunishedChatter = {
    broadcasterId: string;
    login: string;
    totalPunishmentDuration: number;
    expireAt: Date;
};
export interface ExtensionsDocument {
    uuid4: string;
    list: ExtensionItem[];
    theme?: ExtensionThemes;
    sortOrder?: ExtensionItem["uuid"][];
    whitelist?: string[];
    cooldown?: number;
    lastEpoch?: number;
    notification?: {
        hide?: boolean,
        position: {
            x: number;
            y: number;
        };
    };
}

export default ExtensionsDocument;
