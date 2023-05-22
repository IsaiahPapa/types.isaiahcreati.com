type PopType = {
    name: string;
};

type PopSound =
    | {
          source: "stock";
          url: string;
      }
    | { source: "library"; shortId: string };

type PopImage = {
    url: string | string[];
};

export type PopDatabaseDocument = {
    name: string;
    src: PopImage;
    enabled: boolean;
    uses: number;
    // type: "static" | "animated" | "shuffle";
    category: Array<"sticker" | "taunt" | "spray">;
};
