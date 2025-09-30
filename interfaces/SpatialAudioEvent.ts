export interface AudioPosition {
    x: number;
    y: number;
    z: number;
}

export interface AudioVariation {
    url: string;
    lfe?: string;
    probability?: number; // Default to equal probability if not specified
}

export interface SpatialAudioEvent {
    spatial: true;
    name: string;
    category: string;
    game: string;
    variations: AudioVariation[];
    behavior: "single" | "sequence" | "burst";
    sequenceConfig?: {
        count: number | [number, number]; // Fixed count or [min, max] range
        delay: number | [number, number]; // Fixed ms or [min, max] range
        positionVariation?: number; // How much position varies between sequence items (0-1)
    };
    burstConfig?: {
        rpm: number; // Rounds per minute (for weapons)
        count: number | [number, number]; // Fixed count or [min, max] range
        positionVariation?: number; // How much position varies between burst items (0-1)
    };
}