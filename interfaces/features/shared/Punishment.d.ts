import { FeatureInterface } from "../index";

export interface PunishmentFeatureSharedSettings {
    mode: "timeout" | "untimeout" | "ban" | "unban";
    duration: number;
    target: "redeemer" | "text" | "username" | "randomChatter";
    target_username: "";
    // rank?: Array<"vip" | "tier1" | "tier2" | "tier3">;
    rank?: "vip" | "tier1" | "tier2" | "tier3" | "sub";
}

export interface PunishmentFeatureShared extends FeatureInterface {
    type: "punishment";
    settings: PunishmentFeatureSharedSettings;
}
