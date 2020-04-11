export interface BasicOptions {
  nodeResolve?: boolean | object;
  babel?: boolean | object;
  terser?: boolean | object;
  legacyBuild?: 'nomodule';
  developmentMode?: boolean;
}

export interface SpaOptions extends BasicOptions {
  html?: boolean | object;
  polyfillsLoader?: boolean | object;
  workbox?: boolean | object;
}
