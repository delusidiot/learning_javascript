/// <reference types="react-scripts" />

declare namespace NodeJs {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    REACT_APP_API_BASE_URL: string;
    REACT_APP_OAUTH2_REDIRECT_URI: string;
  }
}