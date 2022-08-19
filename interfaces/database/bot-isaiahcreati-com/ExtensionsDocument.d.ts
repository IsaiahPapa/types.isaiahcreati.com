import { ExtensionItem } from "../../extension/ExtensionItem";
type ExtensionThemes = "blue" | "red" | "orange" | "purple";
export interface ExtensionsDocument {
    uuid4: string;
    list: ExtensionItem[];
    theme?: ExtensionThemes;
    sortOrder?: ExtensionItem["uuid"][];
    whitelist?: string[];
    cooldown?: number;
    lastEpoch?: number;
}

export default ExtensionsDocument;
