/*
 * Prediction Types
 */
interface PollChoice {
    title: string; //Maximum 25 Chars
}
interface PollStart {
    method: "START";
    title: string; //Maximum: 45 characters
    choices: PollChoice[];
    duration: number; //Minimum: 1. Maximum: 1800. (seconds)
    channel_points_voting_enabled: boolean;
    channel_points_per_vote: number; //Minimum: 0. Maximum: 1000000
    bits_voting_enabled: boolean;
    bits_per_vote: number; //Minimum: 0. Maximum: 10000.
    allow_user_choices: boolean;
}
export type PollSettings = PollStart;
