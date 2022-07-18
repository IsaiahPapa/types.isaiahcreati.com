import { FeatureInterface } from "../index";

interface StreamOption {
    target: "stream";
    action: "end";
    options: any;
}

interface AudioOptions {
    target: "audio";
    action: "muted";
    // Possibly apply filter
    options: any;
}

interface SourceOptions {
    target: "source";
    action: "enabled" | "filter" | "transform";
    options: any;
}

interface SceneOptions {
    target: "scene";
    action: "change";
    options: any;
}

// Maybe rename target to something like
type OBSEvent = SceneOptions | SourceOptions | AudioOptions | StreamOption;

export type OBSFeatureSharedSettings = { events: OBSEvent[] };

export interface OBSFeatureShared extends FeatureInterface {
    id: "obs";
    settings: OBSFeatureSharedSettings;
}
