import type { ExtensionFeature } from "./Feature";

type AllowedRoles = "subscriber" | "moderator" | "broadcaster";

export interface ExtensionItem {
    uuid: string;
    enabled: boolean;
    amount: number;
    cooldown: number;
    lastEpoch: number;
    allowed: AllowedRoles[];
    features: ExtensionFeature[];
}
