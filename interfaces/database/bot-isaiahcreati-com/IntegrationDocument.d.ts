import { MinecraftExtensionConfig } from "../../features/shared/MinecraftDefaults";

export interface IntegrationDocument {
    _id: string;
    uuid: string;
    twitchId?: string;
    minecraft: MinecraftExtensionConfig;
    integrations?: Record<string, unknown>;
}

export default IntegrationDocument;