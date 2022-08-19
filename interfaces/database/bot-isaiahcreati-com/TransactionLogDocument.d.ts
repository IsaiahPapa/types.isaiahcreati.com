import { ExtensionAlertPayload } from "../../api/extension/index";

interface TransactionLogDocument extends ExtensionAlertPayload {
    _id: string;

    // receipt: string;
    // time: string;
    // broadcaster: {
    //     id: string;
    // };
    // user: {
    //     name: string;
    //     id: string;
    // };
    // input: {
    //     type: string;
    //     shortId?: string;
    //     message?: string;
    //     voice?: string;
    // };
    // item: {
    //     uuid: string;
    // };
    // product: {
    //     domainId: string;
    //     sku: string;
    //     displayName: string;
    //     cost: {
    //         amount: number;
    //         type: string;
    //     };
    // };
    resource?: {
        /**
         * URL of the uploaded object.
         */
        Location: string;
        /**
         * ETag of the uploaded object.
         */
        ETag: string;
        /**
         * Bucket to which the object was uploaded.
         */
        Bucket: string;
        /**
         * Key to which the object was uploaded.
         */
        Key: string;
    };
}

export default TransactionLogDocument;
