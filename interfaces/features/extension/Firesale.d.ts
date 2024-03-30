import { ExtensionItem } from "../../extension/ExtensionItem";
import { ExtensionFeature } from "../../extension/Feature";
import { FeatureInterface } from "../index";

export interface FiresaleFeatureExtensionSettings {
    /*
        These have been moved to ExtensionDocument["firesale"] to be extension wide
    */
}

export interface FiresaleFeatureExtension extends FeatureInterface {
    type: "firesale";
    settings: FiresaleFeatureExtensionSettings;
}
