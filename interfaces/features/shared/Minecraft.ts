import { FeatureInterface } from "../index";

interface GiveDetail {
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
}

interface TauntDetail {
    tauntId: string;
}

interface Give {
    action: "give";
    detail: GiveDetail;
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

export type MinecraftIntegrationFeatureSettings = Give | Effect | SpawnMob | Taunt;
