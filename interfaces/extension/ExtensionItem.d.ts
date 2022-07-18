// Don't know if this was the intent, request changes if it wasn't, fixes transpilation error
import { ExtensionFeature } from "./Feature";

type AllowedRoles = "subscriber" | "moderator" | "broadcaster";

export interface ExtensionItem {
    uuid: string;
    enabled: boolean;
    amount: number;
    cooldown: number;
    sort_order: number;
    allowed: AllowedRoles[];
    features: ExtensionFeature[];
}
