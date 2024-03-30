export interface RefreshTokenResponseType {
    access_token: string;
    refresh_token: string;
    scope: string | string[];
    token_type: "bearer";
    expires_in: number;
}