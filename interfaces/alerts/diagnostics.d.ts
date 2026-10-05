/** Wire format shared by the OBS browser source, socket collector and admin UI. */
export interface AlertDiagnosticSession {
    sessionId: string;
    contextId: string;
    previousSessionId?: string;
    startedAt: number;
    navigation: string;
    userAgent: string;
    obs: boolean;
    storageAvailable: boolean;
    build: string;
}

export interface AlertDiagnosticEvent {
    seq: number;
    at: number;
    elapsedMs: number;
    event: string;
    details: Record<string, string | number | boolean | null>;
}

export interface AlertDiagnosticBatch {
    session: AlertDiagnosticSession;
    events: AlertDiagnosticEvent[];
}

export interface AlertDiagnosticReply {
    ok: boolean;
    enabled?: boolean;
    retry?: boolean;
}
