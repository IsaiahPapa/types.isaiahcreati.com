import { FeatureInterface } from "../index";
import { MobModifier } from "./MobModifier";

interface GiveDetail {
    type: "item";
    itemId: string;
    amount: number;
}

interface TakeDetail {
    type: "item";
    itemId: string;
    amount: number;
}

interface EffectDetail {
    type: "potion";
    potionId: string;
    amplifier: number;
    duration: number;
}

interface SpawnMobDetail {
    type: "mob";
    mobId: string;
    amount: number;
    modifiers?: MobModifier[];
}

interface TauntDetail {
    tauntId: string;
}

interface PlaceBlockDetail {
    blockId: string;
    position: "at" | "above" | "random";
    primed?: boolean;
}

interface PlaySoundDetail {
    soundId: string;
}

interface Give {
    action: "give";
    detail: GiveDetail;
}

interface Take {
    action: "take";
    detail: TakeDetail;
}

interface Effect {
    action: "effect";
    detail: EffectDetail;
}

interface SpawnMob {
    action: "spawn";
    detail: SpawnMobDetail;
}

interface Taunt {
    action: "taunt";
    detail: TauntDetail;
}

interface PlaceBlock {
    action: "placeblock";
    detail: PlaceBlockDetail;
}

interface PlaySound {
    action: "playsound";
    detail: PlaySoundDetail;
}

export type MinecraftIntegrationFeatureSettings =
    | Give
    | Take
    | Effect
    | SpawnMob
    | Taunt
    | PlaceBlock
    | PlaySound;
