import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      // "Heritage Crimson" - A deeper, richer red that feels more academic
      main: '#8D191D', 
      light: '#B3262A',
      dark: '#5F1013',
      contrastText: '#FFFFFF',
    },
    secondary: {
      // "Oxford Blue-Grey" - Deep charcoal with a hint of navy for a premium feel
      main: '#1E293B', 
      light: '#334155',
      dark: '#0F172A',
      contrastText: '#FFFFFF',
    },
    neutral: {
      // Custom palette for borders and subtle backgrounds
      main: '#64748B',
      light: '#F1F5F9',
      dark: '#475569',
    },
    background: {
      // Very slight cream/grey tint feels more premium than pure white #FFFFFF
      default: '#FDFDFD', 
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0F172A', // Near-black for high readability
      secondary: '#475569', // Slate grey for metadata
    },
    divider: 'rgba(15, 23, 42, 0.08)',
  },
  typography: {
    fontFamily: '"Inter", "EB Garamond", "serif"', // EB Garamond is a classic academic font
    h1: { 
      fontSize: '2.25rem', 
      fontWeight: 800, 
      letterSpacing: '-0.025em',
      color: '#1E293B' 
    },
    h2: { 
      fontSize: '1.5rem', 
      fontWeight: 700, 
      letterSpacing: '-0.02em',
      color: '#1E293B' 
    },
    subtitle1: {
      fontSize: '1.1rem',
      lineHeight: 1.5,
      color: '#475569',
    },
    button: { 
      textTransform: 'none', 
      fontWeight: 600,
      letterSpacing: '0.01em' 
    },
  },
  shape: {
    borderRadius: 8, // Sharp enough to be professional, rounded enough to be modern
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 28px',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-1px)', // Subtle lift effect
            boxShadow: '0 4px 12px rgba(141, 25, 29, 0.15)',
          },
        },
        contained: {
          boxShadow: 'none',
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(15, 23, 42, 0.05)',
          borderRadius: 16,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(8px)', // Modern "Glassmorphism" effect
          color: '#0F172A',
          borderBottom: '1px solid rgba(15, 23, 42, 0.05)',
          boxShadow: 'none',
        },
      },
    },
  },
});

// Add TypeScript support for the custom 'neutral' palette
declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}