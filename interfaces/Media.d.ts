export interface Media {
    shortId: string;
    owner: {
        id: string;
        display_name: string;
    };
    title: string;
    source: string;
    public: boolean;
    plays: number;
    type: "sound" | "video";
    tags: string[];
    duration: number;
}

export interface MediaListItem {
    shortId: string;
    alias: string;
    username: string;
    volume: number;
}
