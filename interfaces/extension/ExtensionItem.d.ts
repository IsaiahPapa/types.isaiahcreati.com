import { ExtensionFeature } from "./Feature";

type AllowedRoles = "subscriber" | "moderator" | "broadcaster";

export interface ExtensionItem {
    uuid: string;
    enabled: boolean;
    amount: number;
    cooldown: number;
    lastEpoch: number;
    title?: string;
    allowed: AllowedRoles[];
    features: ExtensionFeature[];
}
