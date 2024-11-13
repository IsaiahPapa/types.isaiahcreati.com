import { SettingPosition } from "../../alerts/index";
import { ExtensionItem } from "../../extension/ExtensionItem";
import { ExtensionFeature } from "../../extension/Feature";
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
    firesale?: {
        lastEpochSeconds?: number;
        durationSeconds: number;
        discountPercent: number; //between 0-100
        viewerParticipationThreshold: number;
        exemptItemIds: string[];
        exemptUserIds: string[];
        exemptFeatures: Exclude<ExtensionFeature["type"], "firesale">[];
    };
    notification?: {
        hide?: boolean;
        position: {
            x: number;
            y: number;
        };
    };
}

export default ExtensionsDocument;
