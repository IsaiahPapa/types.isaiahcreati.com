export type VoiceFromApi = PollyVoice | AiVoiceSchema;

export type PollyVoice = {
    language: string;
    required_role: string;
    name: string;
    gender: "Male" | "Female";
    neural: "Yes" | "No";
    type: "polly";
    messages_generated?: number;
};

export type AiVoiceSchema = {
    uuid?: string;
    twitchId?: string;
    type: "ai";
    model_id: string;
    name: string;
    alt: string;
    category: string[];
    public: boolean;
    enabled: boolean;
    allowed_ids: string[];
    messages_generated: number;
    //Featured on voices page
    featured: boolean;

    audio_sample_url?: string | undefined;
    image_waveform_url?: string | undefined;
    image_banner_url: undefined | string;
    image_thumbnail_url: undefined | string;
};
