import { createTheme } from "@mui/material/styles";

const mainWhite = "#FFFFFF";
const mainBlack = "#000000";
const mainRed = "#E50914";
const lightRed = "#F50723";

export const theme = createTheme({
  palette: {
    primary: {
      main: mainRed,
      light: lightRed,
      contrastText: mainWhite,
    },
    background: {
      default: mainBlack,
    },
  },
  typography: {
    fontFamily: "PT Sans, sans-serif",
    button: {
      fontWeight: "bold",
      textTransform: "none",
    },
  },
});

export default theme;
