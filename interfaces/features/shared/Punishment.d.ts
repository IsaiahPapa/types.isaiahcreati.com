import type { FeatureInterface } from "../index";

export interface PunishmentFeatureSharedSettings {
    mode: "timeout" | "untimeout" | "ban" | "unban";
    duration: number;
    target: "redeemer" | "text" | "username" | "randomChatter";
    target_username: "";
}

export interface PunishmentFeatureShared extends FeatureInterface {
    type: "punishment";
    settings: PunishmentFeatureSharedSettings;
}
