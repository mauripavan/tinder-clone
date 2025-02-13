import theme from '@theme/index';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof theme.colors;
    typography: typeof theme.typography;
  }
}
