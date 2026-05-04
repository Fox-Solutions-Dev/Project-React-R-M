'use client';

import { createTheme } from '@mui/material';

const baseTheme = createTheme({
  colorSchemes: { light: true, dark: true },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: 'var(--font-creepster)',
  },
  mixins: {
    toolbar: {
      '@media (min-width:600px)': {
        minHeight: 90,
      },
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#95f3f2',
      //   light: '#95f3f2',
      //   dark: '#95f3f2',
      //   contrastText: '#fff',
    },
    text: {
      primary: '#333333',
      secondary: '#4D4F53',
    },
  },
});

const { palette } = baseTheme;

const themeWithCustomColors = createTheme(baseTheme, {
  palette: {
    paper: palette.augmentColor({
      color: {
        main: palette.background.paper,
        contrastText: palette.getContrastText(palette.background.paper),
      },
    }),
  },
});

export const theme = createTheme(themeWithCustomColors, {
  cssVariables: {
    colorSchemeSelector: '.theme-%s',
  },
});
