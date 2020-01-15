import 'styled-components';

import theme from '~/lib/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryDark: string;
      primaryLight: string;
      secondary: string;
      tertiary: string;
      black: string;
      white: string;
    };

    /* Spacing  -------------------------------------------- */
    // inspired by https://tailwindcss.com/docs/spacing/#app
    spacing: {
      s0: string;
      s1: string;
      s2: string;
      s3: string;
      s4: string;
      s5: string;
      s6: string;
      s8: string;
      s10: string;
      s12: string;
      s16: string;
      s20: string;
      s24: string;
      s32: string;

      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    /* Borders -------------------------------------------- */
    borders: {
      small: string;
      default: string;
      large: string;
    };

    /* Shadows --------------------------------------------- */
    shadows: {
      shadow1: string;
      shadow2: string;
      shadow3: string;
      shadow4: string;
      shadow5: string;
    };

    /* Typography ------------------------------------------ */
    font: {
      family: {
        base: string;
        cursive: string;
      };
      size: {
        smaller: string;
        small: string;
        medium: string;
        mediumLarge: string;
        large: string;
        larger: string;
        largerStill: string;
        largest: string;
        displaySmall: string;
        display: string;
        displayLarge: string;
      };
      weight: {
        thin: string;
        regular: string;
        bold: string;
      };
    };
  }
}

// For more information about this alternative,
// see https://github.com/styled-components/styled-components-website/issues/447

// type Theme = typeof theme

// declare module 'styled-components' {
//   export interface DefaultTheme extends Theme {}
// }
