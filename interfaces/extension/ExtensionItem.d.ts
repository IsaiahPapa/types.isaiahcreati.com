import { Feature } from "./Feature";

type AllowedRoles = "subscriber" | "moderator" | "broadcaster";

export interface ExtensionItem {
    uuid: string;
    enabled: boolean;
    amount: number;
    cooldown: number;
    sort_order: number;
    allowed: AllowedRoles[];
    features: Feature[];
}
