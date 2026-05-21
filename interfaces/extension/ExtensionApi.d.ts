import ExtensionsDocument from "../database/bot-isaiahcreati-com/ExtensionsDocument";
import { ExtensionItem } from "./ExtensionItem";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U];

interface ExtensionPubSubMessageInterface {
    type:
        | "ITEM_DELETE"
        | "ITEM_UPDATE"
        | "ITEM_CREATE"
        | "THEME_CHANGE"
        | "MAINTENANCE"
        | "FIRESALE.START"
        | "FIRESALE.STOP"
        | "FIRESALE.UPDATE";
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
export interface FiresaleStartPubSubMessage extends ExtensionPubSubMessageInterface {
    type: "FIRESALE.START";
    endsAt: number; // epoch seconds
    items: { uuid: ExtensionItem["uuid"]; firesalePrice: number }[];
    discountPercent: number;
    startedAt: number;
}

export interface FiresaleStopPubSubMessage extends ExtensionPubSubMessageInterface {
    type: "FIRESALE.STOP";
}

export interface FiresaleUpdatePubSubMessage extends ExtensionPubSubMessageInterface {
    type: "FIRESALE.UPDATE";
    endsAt: number;
    items: { uuid: ExtensionItem["uuid"]; firesalePrice: number }[];
    discountPercent: number;
    startedAt: number;
}

export type ExtensionPubSubMessage =
    | ItemDeletePubSubMessage
    | ItemUpdatePubSubMessage
    | ItemCreatePubSubMessage
    | ThemeChangePubSubMessage
    | MaintenanceChangePubSubMessage
    | FiresaleStartPubSubMessage
    | FiresaleStopPubSubMessage
    | FiresaleUpdatePubSubMessage;
