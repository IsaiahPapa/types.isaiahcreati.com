/*
 * Prediction Types
 */

import type { FeatureInterface } from "../index";

interface PredictionStart {
    method: "START";
}

export type PredictionStartSettings = PredictionStart & {
    title: string; //Maximum: 45 characters
    outcomes: { title: string }[]; //Maximum: 25 characters for the title
    prediction_window: number; //Minimum: 1. Maximum: 1800. (seconds)
    allow_user_outcomes: boolean;
};

interface PredictionEnd {
    method: "END";
}

//A winning outcome has been chosen and the Channel Points have been distributed to the users who predicted the correct outcome.
type PredictionEndResolved = PredictionEnd & {
    status: "RESOLVED";
    winning_outcome_id: string;
};
//The Prediction has been canceled and the Channel Points have been refunded to participants.
type PredictionEndCanceled = PredictionEnd & {
    status: "CANCELED";
};
//The Prediction has been locked and viewers can no longer make predictions.
export type PredictionEndLocked = PredictionEnd & {
    status: "LOCKED";
};

type PredictionEndSettings = PredictionEndResolved | PredictionEndCanceled | PredictionEndLocked;

export type PredictionFeatureRewardSettings = PredictionEndSettings | PredictionStartSettings;

export interface PredictionFeatureReward extends FeatureInterface {
    id: "prediction";
    settings: PredictionFeatureRewardSettings;
}
