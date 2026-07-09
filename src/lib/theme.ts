import { createTheme } from "@mui/material/styles";

// ─── BRAND COLORS FROM LOGO ───────────────────────────────────────────────────
// Primary: Deep Purple  #5B2D8E
// Accent:  Golden Amber #F5C842
// Light bg: Soft Lavender White #F8F6FF
// Dark:     Rich Charcoal #1E1428
// Neutral:  Warm Grey #6B6478

export const BRAND = {
  purple: "#5B2D8E",
  purpleDark: "#3D1D63",
  purpleBlack: "#2A1147",
  purpleLight: "#7B4DB8",
  purplePale: "#EDE8F7",
  purpleGhost: "#F8F6FF",
  gold: "#F5C842",
  goldDark: "#D4A820",
  goldLight: "#FAE07A",
  goldPale: "#FDF6D8",
  charcoal: "#1E1428",
  charcoalMid: "#2E2040",
  grey: "#6B6478",
  warmGrey: "#6B6478", // alias
  muted: "#6B6478", // alias
  lightGrey: "rgba(91,45,142,0.12)",
  lavender: "#EDE8F7", // alias for purplePale
  softWhite: "#F8F6FF", // alias for purpleGhost
  greyLight: "#9B93A8",
  offWhite: "#FDFBFF",
  white: "#FFFFFF",
};

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: BRAND.purple,
      light: BRAND.purpleLight,
      dark: BRAND.purpleDark,
      contrastText: BRAND.white,
    },
    secondary: {
      main: BRAND.gold,
      light: BRAND.goldLight,
      dark: BRAND.goldDark,
      contrastText: BRAND.charcoal,
    },
    background: {
      default: BRAND.offWhite,
      paper: BRAND.purpleGhost,
    },
    text: {
      primary: BRAND.charcoal,
      secondary: BRAND.grey,
    },
  },
  typography: {
    fontFamily: "'Martel Sans', 'Lexend Deca', sans-serif",
    h1: {
      fontFamily: "'Playfair Display SC', serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      lineHeight: 1.08,
    },
    h2: {
      fontFamily: "'Derivia', sans-serif",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: "'Oswald', sans-serif",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: "'Bangers', sans-serif",
      fontWeight: 500,
      fontStyle: "italic",
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: "'Julius Sans One', sans-serif",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "'Spectral', serif",
      fontWeight: 500,
    },
    body1: {
      fontFamily: "'Lexend Deca', sans-serif",
      fontWeight: 300,
      lineHeight: 1.85,
      letterSpacing: "0.01em",
    },
    body2: {
      fontFamily: "'Martel Sans', sans-serif",
      fontWeight: 300,
      lineHeight: 1.75,
    },
    subtitle1: {
      fontFamily: "'Rightman Signature', cursive",
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: "1.1rem",
      lineHeight: 1.6,
    },
    subtitle2: {
      fontFamily: "'Love Light', cursive",
      fontWeight: 500,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      fontSize: "0.72rem",
    },
    button: {
      fontFamily: "'Ruthie', cursive",
      fontWeight: 500,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      fontSize: "0.75rem",
    },
  },
  shape: { borderRadius: 2 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: "14px 40px",
          transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          boxShadow: "none",
          "&:hover": { transform: "translateY(-2px)", boxShadow: "none" },
        },
        contained: {
          "&:hover": { boxShadow: "0 8px 28px rgba(91,45,142,0.35)" },
        },
        containedSecondary: {
          color: BRAND.charcoal,
          "&:hover": { boxShadow: "0 8px 28px rgba(245,200,66,0.4)" },
        },
        outlined: {
          borderWidth: "1.5px",
          "&:hover": { borderWidth: "1.5px" },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 0,
            "& fieldset": { borderColor: "rgba(91,45,142,0.2)" },
            "&:hover fieldset": { borderColor: BRAND.purple },
            "&.Mui-focused fieldset": {
              borderColor: BRAND.purple,
              borderWidth: "2px",
            },
          },
          "& .MuiInputLabel-root.Mui-focused": { color: BRAND.purple },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontFamily: "'Jost', sans-serif",
          fontWeight: 500,
          letterSpacing: "0.08em",
          fontSize: "0.65rem",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: "rgba(91,45,142,0.15)" },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: "0 2px 16px rgba(30,20,40,0.06)",
          transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          "&:hover": {
            boxShadow: "0 12px 40px rgba(30,20,40,0.12)",
            transform: "translateY(-4px)",
          },
        },
      },
    },
  },
});
