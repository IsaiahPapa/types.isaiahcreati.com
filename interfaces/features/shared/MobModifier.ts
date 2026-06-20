export type MobModifier =
    | { kind: "scale"; value: number }
    | { kind: "speed"; multiplier: number }
    | { kind: "baby" }
    | {
          kind: "equipment";
          slot: "mainhand" | "chest" | "legs" | "feet" | "head";
          itemId: string;
          enchantments?: { id: string; level: number }[];
      };