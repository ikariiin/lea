import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#00cc76",
    },
    secondary: {
      main: "#009fcc",
    },
    text: {
      primary: "#3a4a3f",
      secondary: "#9db0a3",
    },
    background: {
      default: "#d9d9d9",
      paper: "#f2f2f2",
    },
  },
  typography: {
    fontFamily: [
      "Be Vietnam Pro",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(", "),
    h1: {
      fontWeight: 100,
    },
    h2: {
      fontWeight: 100,
    },
    h3: {
      fontWeight: 100,
    },
    h4: {
      fontWeight: 300,
    },
    h5: {
      fontWeight: 300,
    },
    h6: {
      fontWeight: 300,
    },
    body1: {
      fontWeight: 500,
    },
    body2: {
      fontWeight: 500,
    },
    fontSize: 14,
    htmlFontSize: 18,
  },
  shape: {
    borderRadius: 6,
  },
});
