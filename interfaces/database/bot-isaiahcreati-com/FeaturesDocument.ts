import { Feature } from "../../rewards/Feature";

export interface FeaturesDocument {
    uuid4: string;
    features: { [uuid: string]: Feature[] };
}

export default FeaturesDocument;
