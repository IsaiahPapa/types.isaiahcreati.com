export type MediaInteraction = {
    uuid: string;
    type: "sound" | "video";
    input: {
        shortId: string;
    };
};

export type TTSInteraction = {
    uuid: string;
    type: "tts";
    input: {
        voice: string;
        message: string;
    };
};

export type PunishmentInteraction = {
    uuid: string;
    type: "punishment";
    input: {
        username: string;
        id: string;
    };
};

export type DefaultInteraction = {
    uuid: string;
    type: "";
    input: {};
};

export type Interaction = TTSInteraction | MediaInteraction | PunishmentInteraction | DefaultInteraction;
export type ExtractInteraction<T extends Interaction["type"]> = Extract<Interaction["input"], { type: T }>;
