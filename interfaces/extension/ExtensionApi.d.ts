import ExtensionsDocument from "../database/bot-isaiahcreati-com/ExtensionsDocument";
import { ExtensionItem } from "./ExtensionItem";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U];

interface ExtensionPubSubMessageInterface {
    type: "ITEM_DELETE" | "ITEM_UPDATE" | "ITEM_CREATE" | "THEME_CHANGE" | "MAINTENANCE";
}

export interface ItemCreatePubSubMessage extends ExtensionPubSubMessageInterface {
    type: "ITEM_CREATE";
    item: ExtensionItem;
}
export interface ItemUpdatePubSubMessage extends ExtensionPubSubMessageInterface {
    type: "ITEM_UPDATE";
    uuid: ExtensionItem["uuid"];
    updates: AtLeastOne<ExtensionItem>;
}
export interface ItemDeletePubSubMessage extends ExtensionPubSubMessageInterface {
    type: "ITEM_DELETE";
    uuid: ExtensionItem["uuid"];
}

export interface ThemeChangePubSubMessage extends ExtensionPubSubMessageInterface {
    type: "THEME_CHANGE";
    theme: ExtensionsDocument["theme"];
}

export interface MaintenanceChangePubSubMessage extends ExtensionPubSubMessageInterface {
    type: "MAINTENANCE";
    isEnabled: boolean;
}

export type ExtensionPubSubMessage =
    | ItemDeletePubSubMessage
    | ItemUpdatePubSubMessage
    | ItemCreatePubSubMessage
    | ThemeChangePubSubMessage
    | MaintenanceChangePubSubMessage;
