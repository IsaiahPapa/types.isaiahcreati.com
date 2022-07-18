type MediaInteraction = {
    uuid: string;
    type: "sound" | "video";
    input: {
        shortId: string;
    };
};

type TTSInteraction = {
    uuid: string;
    type: "tts";
    input: {
        voice: string;
        message: string;
    };
};

type TimeoutInteraction = {
    uuid: string;
    type: "timeout";
    input: {
        username: string;
    };
};

type DefaultInteraction = {
    uuid: string;
    type: "";
    input: {};
};

export type Interaction = TTSInteraction | MediaInteraction | TimeoutInteraction | DefaultInteraction;
