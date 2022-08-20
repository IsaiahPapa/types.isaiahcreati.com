//If they want to timeout someone
//Call ban endpoint WITH duration provided
//if they want to untimeout someone
//Call ban endpoint with duration set to 1
//If they want to ban someone
//Call ban endpoint with NO duration provided
//If they want to unban someone
//call unban endpoint

import type { FeatureInterface } from "../index";

export interface TimeoutFeatureSharedSettings {
    duration: number;
    target_specific_chatter: boolean;
    target_chatter: "";
}

export interface TimeoutFeatureShared extends FeatureInterface {
    type: "timeout";
    settings: TimeoutFeatureSharedSettings;
}
