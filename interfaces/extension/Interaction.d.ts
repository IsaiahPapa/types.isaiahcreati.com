import { InteractionSourceType } from "./InteractionSource";

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
        modelId?: string;
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
        duration: number;
    };
};

export type PopInteraction = {
    uuid: string;
    type: "pop";
    input: {
        popId: string;
        position: string;
    }
}

export type DefaultInteraction = {
    uuid: string;
    type: "";
    input: {};
    source?: InteractionSourceType;
};

export type Interaction = TTSInteraction | MediaInteraction | PunishmentInteraction | PopInteraction | DefaultInteraction;
export type ExtractInteraction<T extends Interaction["type"]> = Extract<Interaction["input"], { type: T }>;
