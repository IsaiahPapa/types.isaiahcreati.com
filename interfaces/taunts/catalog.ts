export const foods = [
    {
        id: "tomato",
        name: "Tomato",
        icon: "🍅",
        description: "Red pulp, seeds and a compact splat.",
    },
    {
        id: "pumpkin",
        name: "Pumpkin",
        icon: "🎃",
        description: "A chunky squash with orange pulp and rind fragments.",
    },
    {
        id: "carrot",
        name: "Carrot",
        icon: "🥕",
        description: "A Synty carrot with orange pulp and fragments.",
    },
    {
        id: "apple",
        name: "Apple",
        icon: "🍎",
        description: "A Synty apple with a compact splat.",
    },
    {
        id: "beetroot",
        name: "Beetroot",
        icon: "🫜",
        description: "A Synty beetroot with a compact splat.",
    },
    {
        id: "cabbage",
        name: "Cabbage",
        icon: "🥬",
        description: "A Synty cabbage with a compact splat.",
    },
    {
        id: "corn",
        name: "Corn",
        icon: "🌽",
        description: "A Synty corn with a compact splat.",
    },
    {
        id: "eggplant",
        name: "Eggplant",
        icon: "🍆",
        description: "A Synty eggplant with a compact splat.",
    },
    {
        id: "onion",
        name: "Onion",
        icon: "🧅",
        description: "A Synty onion with a compact splat.",
    },
    {
        id: "pear",
        name: "Pear",
        icon: "🍐",
        description: "A Synty pear with a compact splat.",
    },
    {
        id: "pepper",
        name: "Pepper",
        icon: "🫑",
        description: "A Synty pepper with a compact splat.",
    },
    {
        id: "potato",
        name: "Potato",
        icon: "🥔",
        description: "A Synty potato with a compact splat.",
    },
    {
        id: "watermelon",
        name: "Watermelon",
        icon: "🍉",
        description: "A Synty watermelon with a compact splat.",
    },
    {
        id: "pumpkin_italian",
        name: "Italian squash",
        icon: "🎃",
        description: "A Synty italian squash with a compact splat.",
    },
    {
        id: "pumpkin_white",
        name: "White pumpkin",
        icon: "🎃",
        description: "A Synty white pumpkin with a compact splat.",
    },
    {
        id: "egg",
        name: "Egg",
        icon: "🥚",
        description: "Cracked shell, a small yolk and subtle egg white.",
    },
] as const;

export type FoodId = (typeof foods)[number]["id"];
export const props = [
    {
        id: "plunger",
        name: "Plunger",
        icon: "🪠",
        description: "Sticks briefly, wobbles, then pops away.",
    },
    {
        id: "duck",
        name: "Rubber duck",
        icon: "🦆",
        description: "A little rubber-duck bounce.",
    },
    {
        id: "boot",
        name: "Boot",
        icon: "👢",
        description: "A spinning boot that tumbles away.",
    },
    {
        id: "hammer",
        name: "Hammer",
        icon: "🔨",
        description: "A chunky bonk and a burst of stars.",
    },
    {
        id: "teddy",
        name: "Teddy bear",
        icon: "🧸",
        description: "A soft bounce with little hearts.",
    },
    {
        id: "pan",
        name: "Frying pan",
        icon: "🍳",
        description: "A pan bonk that recoils off the screen.",
    },
    {
        id: "toiletpaper",
        name: "Toilet paper",
        icon: "🧻",
        description: "A rolling paper bounce.",
    },
] as const;
export type PropId = (typeof props)[number]["id"];
export const throwables = [...foods, ...props];
export type ThrowableId = (typeof throwables)[number]["id"];

/** Viewer vocabulary is independent of stable renderer IDs. */
export const throwableAliases: Partial<Record<ThrowableId, readonly string[]>> = {
    duck: ["duck", "rubber ducky", "rubber duckie"],
    teddy: ["teddy", "bear"],
    pan: ["pan", "skillet"],
    toiletpaper: ["toiletpaper", "toilet roll", "tp"],
    beetroot: ["beet"],
    eggplant: ["aubergine"],
    pepper: ["bell pepper"],
    pumpkin_italian: ["italian pumpkin"],
};
