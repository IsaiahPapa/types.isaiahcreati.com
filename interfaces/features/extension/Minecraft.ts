import { FeatureInterface } from "../index";
import { MinecraftIntegrationFeatureSettings } from "../shared/Minecraft";

export interface MinecraftFeatureExtension extends FeatureInterface {
    type: "integration:minecraft";
    settings: MinecraftIntegrationFeatureSettings;
}