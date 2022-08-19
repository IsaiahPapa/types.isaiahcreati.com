import { FeatureInterface } from "../index";
import { TTSFeatureSharedSettings } from "../shared/TTS";

export interface TTSFeatureExtensionSettings extends TTSFeatureSharedSettings {
    user_can_choose_voice: boolean;
    allowed_voices: string[];
}

export interface TTSFeatureExtension extends FeatureInterface {
    type: "tts";
    settings: TTSFeatureExtensionSettings;
}