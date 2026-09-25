export type IntegrationRenderStyle = "pixelated" | "default";

export interface IntegrationManifestCategory {
    key: string;
    title: string;
    icon: string;
    spin?: string;
    searchPlaceholder?: string;
    actionLabel?: string;
}

export interface IntegrationManifest {
    integration: string;
    version: number;
    categories: IntegrationManifestCategory[];
    renderStyle?: IntegrationRenderStyle;
}