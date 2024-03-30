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
    firesale_only?: boolean;
    firesale_amount?: number;
    alertId?: string;
}
