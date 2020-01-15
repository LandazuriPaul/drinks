import { createMuiTheme } from '@material-ui/core';
import { DefaultTheme } from 'styled-components';

// typecasting with `as` lets you get literals on autocomplete popup
export const theme: DefaultTheme = {
  /* Colors --------------------------------------------- */
  colors: {
    // accessors
    primary: '#DBB561',
    primaryDark: '#4C3800',
    primaryLight: '#E5CB90',
    secondary: '#5DAB7C',
    tertiary: '#BB6B62',
    black: '#7E7D7D',
    white: '#F5F5F5',
  },

  /* Spacing  -------------------------------------------- */
  // inspired by https://tailwindcss.com/docs/spacing/#app
  spacing: {
    s0: '0' as '0',
    s1: '0.25rem' as '0.25rem', // 4px
    s2: '0.5rem' as '0.5rem', // 8px
    s3: '0.75rem' as '0.75rem', // 12px
    s4: '1rem' as '1rem', // 16px
    s5: '1.25rem' as '1.25rem',
    s6: '1.5rem' as '1.5rem',
    s8: '2rem' as '2rem', // 32px
    s10: '2.5rem' as '2.5rem',
    s12: '3rem' as '3rem',
    s16: '4rem' as '4rem', // 64px
    s20: '5rem' as '5rem',
    s24: '6rem' as '6rem',
    s32: '8rem' as '8rem', // 128px

    xs: '20rem' as '20rem',
    sm: '30rem' as '30rem',
    md: '40rem' as '40rem',
    lg: '50rem' as '50rem',
    xl: '60rem' as '60rem', // 720px - container width
  },

  /* Borders -------------------------------------------- */
  borders: {
    small: '2px' as '2px',
    default: '4px' as '4px',
    large: '8px' as '8px',
  },

  /* Shadows --------------------------------------------- */
  shadows: {
    shadow1: '0 1px 3px hsla(0, 0%, 0%, 0.2)' as '0 1px 3px hsla(0, 0%, 0%, 0.2)',
    shadow2: '0 4px 6px hsla(0, 0%, 0%, 0.2)' as '0 4px 6px hsla(0, 0%, 0%, 0.2)',
    shadow3: '0 5px 15px hsla(0, 0%, 0%, 0.2)' as '0 5px 15px hsla(0, 0%, 0%, 0.2)',
    shadow4: '0 10px 24px hsla(0, 0%, 0%, 0.2)' as '0 10px 24px hsla(0, 0%, 0%, 0.2)',
    shadow5: '0 15px 35px hsla(0, 0%, 0%, 0.2)' as '0 15px 35px hsla(0, 0%, 0%, 0.2)',
  },

  /* Typography ------------------------------------------ */
  font: {
    family: {
      base: "'Roboto', sans-serif",
      cursive: "'Pacifico', cursive",
    },
    size: {
      smaller: '0.75rem' as '0.75rem', // 12px
      small: '0.875rem' as '0.875rem', // 14px
      medium: '1rem' as '1rem', // 16px
      mediumLarge: '1.125rem' as '1.125rem', // 18px
      large: '1.25rem' as '1.25rem', // 20px
      larger: '1.5rem' as '1.5rem', // 24px
      largerStill: '1.875rem' as '1.875rem', // 30px
      largest: '2.25rem' as '2.25rem', // 36px
      displaySmall: '3rem' as '3rem', // 48px
      display: '3rem' as '3rem', // 48px
      displayLarge: '3.75rem' as '3.75rem', // 60px
    },
    weight: {
      thin: '300' as '300',
      regular: '400' as '400',
      bold: '700' as '700',
    },
  },
};

export const materialTheme = createMuiTheme({
  palette: {
    primary: {
      light: theme.colors.primaryLight,
      main: theme.colors.primary,
      dark: theme.colors.primaryDark,
      contrastText: theme.colors.white,
    },
  },
});
