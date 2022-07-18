import { ExtensionItem } from "../../extension/ExtensionItem";

export interface ExtensionsDocument {
    uuid4: string;
    sortOrder: ExtensionItem["uuid"][];
    features: ExtensionItem[];
}

export default ExtensionsDocument;
