/// <reference types="vite/client" />
/// <reference types="electron" />

declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;
declare const MAIN_WINDOW_VITE_NAME: string;

type Clipping = {
  id: string;
  type?: string;
  value: string;
};

declare interface Window {
  api: import('../src/preload').Api
}
