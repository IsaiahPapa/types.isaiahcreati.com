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

export type VoiceProvider = "twitch" | "kick";

export type AiVoiceSchema = {
    uuid?: string;
    
    // Legacy format (for backward compatibility with old documents)
    twitchId?: string;
    owner?: {
        uuid4: string;
        provider: VoiceProvider;
    }
    
    type: "ai";
    model_id: string;
    name: string;
    alt: string;
    category: string[];

    is_hidden?: boolean;
    

    ids_allowed_to_fork: string[];
    messages_generated: number;
    featured: boolean;
    audio_sample_url?: string | undefined;
    language: string;
    reference?: {
        url?: string | undefined;
        transcription?: string | undefined;
    };
    image_waveform_url?: string | undefined;
    image_banner_url: undefined | string;
    image_thumbnail_url: undefined | string;
    public: boolean;
    is_fork: boolean;
    deleted_at?: Date | string | undefined;
    created_at: Date;
    updated_at: Date;
    
    forked_from?: {
        model_id: string;
        owner_uuid4?: string; // Added for easier querying of fork ownership
        twitchId?: string;
        fork_date: Date;
    };
    fork_count?: number;
};
