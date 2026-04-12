import { Feature } from "../rewards/Feature";

export type RewardFeatureAnalyticsStatus = "executed" | "skipped" | "failed";

export type RewardFeatureAnalyticsSource = "rewards_pubsub" | "rewards_chat";

export type RewardFeatureKey = Feature["type"] | `runcommand:${string}`;

export interface RewardFeatureAnalyticsError {
    message: string;
    code?: string;
    handler?: string;
    kind?: string;
}

export interface RewardFeatureAnalyticsEvent {
    timestamp: Date;
    day: string;
    broadcasterId: string;
    rewardId: string;
    featureId: string;
    featureType: Feature["type"];
    featureVariant?: string;
    featureKey: RewardFeatureKey;
    source: RewardFeatureAnalyticsSource;
    status: RewardFeatureAnalyticsStatus;
    redeemerId?: string;
    error?: RewardFeatureAnalyticsError;
}

export interface RewardFeatureAnalyticsDailyErrorCount {
    message: string;
    count: number;
}

export interface RewardFeatureAnalyticsDaily {
    day: string;
    featureKey: RewardFeatureKey;
    featureType: Feature["type"];
    featureVariant?: string;
    executedCount: number;
    skippedCount: number;
    failedCount: number;
    broadcasterIds?: string[];
    rewardIds?: string[];
    uniqueBroadcasterCount?: number;
    uniqueRewardCount?: number;
    topErrors?: RewardFeatureAnalyticsDailyErrorCount[];
    lastUpdatedAt?: Date;
}
