export interface TTSSettings {
    modelId?: string;
    voice: string;
    charLimit: number;
    volume: number;
    readUsername: boolean;
    actionVerb: string;
    filter: {
        remove_urls: boolean;
        enabled: false;
        wordList: string;
        placeholder: string;
    };
    template: {
        enabled: boolean;
        message: string;
    };
}
