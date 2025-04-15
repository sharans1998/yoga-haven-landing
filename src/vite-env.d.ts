/// <reference types="vite/client" />

declare interface ImportMetaEnv {
    readonly NODE_FO_API_KEY: string;
    readonly NODE_ENV: 'development' | 'production' | 'test';
    // Add other environment variables here if needed
}

declare interface ImportMeta {
    readonly env: ImportMetaEnv;
}
