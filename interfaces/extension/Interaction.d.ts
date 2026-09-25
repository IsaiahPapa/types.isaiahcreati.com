import { InteractionSourceType } from "./InteractionSource";
import { MinecraftIntegrationFeatureSettings } from "../features/shared/Minecraft";

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

export type MinecraftInteraction = {
    uuid: string;
    type: "minecraft";
    input: MinecraftIntegrationFeatureSettings;
    source?: InteractionSourceType;
};

export type IntegrationInteraction = {
    uuid: string;
    type: "integration";
    integration: string;
    input: unknown;
    source?: InteractionSourceType;
};

export type DefaultInteraction = {
    uuid: string;
    type: "";
    input: {};
    source?: InteractionSourceType;
};

export type Interaction =
    | TTSInteraction
    | MediaInteraction
    | PunishmentInteraction
    | MinecraftInteraction
    | IntegrationInteraction
    | DefaultInteraction;
export type ExtractInteraction<T extends Interaction["type"]> = Extract<Interaction["input"], { type: T }>;
