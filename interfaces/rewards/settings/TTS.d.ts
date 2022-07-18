export interface TTSSettings {
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
