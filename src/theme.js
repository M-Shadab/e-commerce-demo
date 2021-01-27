const primary = "#007bff";
const lightPink = "#ffdde2";
const pink = "#ff405d";
const darkCyan = "darkcyan";
const cyan = "cyan";
const yellowOrange = "#ffae42";
const white = "#fff";
const dark = "#4a4a4a";
const grey = "#aaa";
const mediumGrey = "#7e7e7e";
const lightGrey = "#eee";

export const theme = {
  borderRadius: "4px",
  rounded: "50%",
  borderPrimary: `1px solid ${primary}`,
  borderInfo: `1px solid ${pink}`,
  borderDark: `1px solid ${grey}`,
  borderLight: `1px solid ${lightGrey}`,
  palette: {
    primary: {
      main: primary,
      contrastText: white,
    },
    secondary: {
      main: grey,
      contrastText: dark,
    },
    info: {
      main: pink,
      contrastText: white,
    },
    common: {
      black: dark,
      white: white,
    },
    grey: {
      main: grey,
      light: lightGrey,
      medium: mediumGrey,
    },
    cyan: {
      main: darkCyan,
      light: cyan,
    },
    pink: {
      main: pink,
      light: lightPink,
    },
    orange: {
      main: yellowOrange,
    },
  },
};
