import { FeatureInterface } from "../index";

export interface TTSFeatureSharedSettings {
    voice: string;
    charLimit: number;
    volume: number;
    readUsername: boolean;
    actionVerb: string;
    modelId?: string;
    filter: {
        remove_urls: boolean;
        enabled: boolean;
        wordList: string;
        placeholder: string;
    };
    template: {
        enabled: boolean;
        message: string;
    };
}

export interface TTSFeatureShared extends FeatureInterface {
    type: "tts";
    settings: TTSFeatureSharedSettings;
}