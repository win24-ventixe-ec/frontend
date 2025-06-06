import { createTheme } from '@mui/material/styles';
import tokens from './assets/tokens.json';

// Helper to get token value, handles top-level and grouped color tokens
function v(key) {
  const top = tokens[key];
  if (top && top.value) return top.value;
  if (tokens.Grey && tokens.Grey[key] && tokens.Grey[key].value)
    return tokens.Grey[key].value;
  if (
    tokens['Cool Grey'] &&
    tokens['Cool Grey'][key] &&
    tokens['Cool Grey'][key].value
  )
    return tokens['Cool Grey'][key].value;
  console.warn(`Token '${key}' not found`);
  return key;
}

// Light theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: v('Primary-90'),
      main: v('Primary-100'),
      dark: v('Primary-110'),
      contrastText: v('Grey-10'),
    },
    secondary: {
      light: v('Secondary-70'),
      main: v('Secondary-100'),
      dark: v('Secondary-110'),
      contrastText: v('Grey-10'),
    },
    warning: {
      light: v('Yellow-90'),
      main: v('Yellow-100'),
      contrastText: v('Grey-100'),
    },
    grey: {
      10: v('Grey-10'),
      20: v('Grey-20'),
      30: v('Grey-30'),
      40: v('Grey-40'),
      50: v('Grey-50'),
      60: v('Grey-60'),
      70: v('Grey-70'),
      80: v('Grey-80'),
      90: v('Grey-90'),
      100: v('Grey-100'),
    },
    background: {
      default: v('Grey-20'),
      paper: v('Grey-10'),
    },
    text: {
      primary: v('Grey-100'),
      secondary: v('Grey-70'),
    },
  },
  typography: {
    fontFamily: tokens.fontFamilies?.inter?.value || 'Poppins, sans-serif',
    // Add heading and body styles as needed, e.g.:
    // h1: { fontSize: '2rem', fontWeight: 600 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': { boxSizing: 'border-box' },
        html: { fontSize: '1rem' },
        body: {
          margin: 0,
          padding: 0,
          fontFamily: tokens.fontFamilies.inter.value,
          backgroundColor: v('Grey-20'),
          color: v('Grey-100'),
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '4px',
        },
      },
    },
    // Add other component overrides as needed
  },
});

// Dark theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: v('Primary-90'),
      main: v('Primary-100'),
      dark: v('Primary-110'),
      contrastText: v('Grey-10'),
    },
    secondary: {
      light: v('Secondary-70'),
      main: v('Secondary-90'),
      dark: v('Secondary-110'),
      contrastText: v('Grey-10'),
    },
    warning: {
      light: v('Yellow-90'),
      main: v('Yellow-100'),
      contrastText: v('Grey-100'),
    },
    grey: {
      10: v('Cool Grey-10'),
      20: v('Cool Grey-20'),
      30: v('Cool Grey-30'),
      40: v('Cool Grey-40'),
      50: v('Cool Grey-50'),
      60: v('Cool Grey-60'),
      70: v('Cool Grey-70'),
      80: v('Cool Grey-80'),
      90: v('Cool Grey-90'),
      100: v('Cool Grey-100'),
    },
    background: {
      default: v('Cool Grey-100'),
      paper: v('Secondary-110'),
    },
    text: {
      primary: v('Grey-10'),
      secondary: v('Cool Grey-40'),
    },
  },
  typography: {
    fontFamily: tokens.fontFamilies.inter.value,
    // Add heading and body styles for dark mode if different
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: v('Cool Grey-100'),
          color: v('Grey-10'),
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '4px',
        },
      },
    },
  },
});
