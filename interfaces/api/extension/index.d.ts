import type { Interaction } from "../../extension/Interaction";

export type ExtensionProduct = {
    domainId: string;
    sku: string;
    displayName: string;
    cost: {
        amount: number;
        type: "bits" | string;
    };
};

export type ExtensionUserAuthJWTPayload = {
    exp: number;
    opaque_user_id: string;
    user_id: string;
    channel_id: string;
    role: string;
    is_unlinked: boolean;
    pubsub_perms: {
        listen: string[];
        send: string[];
    };
};

export type ExtensionReceiptJWTPayload = {
    topic: "bits_transaction_receipt" | string;
    exp: number;
    data: {
        transactionId: string;
        time: string;
        userId: string;
        product: ExtensionProduct;
    };
};

export type ExtensionTransactionPostBody = {
    user: {
        displayName: string;
        id: string;
    };
    interaction: Interaction;
    transactionReceipt: string;
};

export type ExtensionAlertPayload = {
    transactionId: ExtensionReceiptJWTPayload["data"]["transactionId"];
    interaction: Interaction;
    product: ExtensionProduct;
    broadcaster: {
        id: string;
    };
    user: ExtensionTransactionPostBody["user"];
};
