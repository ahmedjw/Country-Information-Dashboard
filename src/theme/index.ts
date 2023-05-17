import { createTheme } from "@material-ui/core/styles";
import COLORS from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.DCBlue,
    },
    secondary: {
      main: COLORS.veryLightGrey,
    },
    background: {
      default: COLORS.white,
    },
  },
  typography: {
    fontFamily: ["Avenir", "Arial", "sans-serif"].join(","),
    htmlFontSize: 16,
    fontSize: 14,
    h1: {
      fontSize: "1.5rem", // 24px
      fontWeight: 900,
      lineHeight: 1.3,
    },
    h2: {
      fontSize: "1.5rem", // 24px
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "1.125rem", // 18px
      fontWeight: 900,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: "1.125rem", // 18px
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h5: {
      fontSize: "1rem", // 16px
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h6: {
      fontSize: "0.9375rem", // 15px
      fontWeight: 900,
      lineHeight: 1.3,
      textTransform: "none",
    },
    subtitle1: {
      fontSize: "0.875rem", // 14px
      lineHeight: 1.3,
    },
    subtitle2: {
      fontSize: "0.75rem", // 12px
      lineHeight: 1.3,
    },
    body1: {
      fontSize: "1rem", // 16px
      lineHeight: 1.3,
    },
    body2: {
      fontSize: "0.875rem", // 14px
      lineHeight: 1.3,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
    MuiCssBaseline: {
      "@global": {
        html: {
          margin: 0,
          padding: 0,
        },
        body: {
          margin: 0,
          padding: 0,
        },
      },
    },
  },
  props: {
    MuiButton: {
      variant: "contained",
      disableElevation: true,
    },
  },
});

export default theme;
