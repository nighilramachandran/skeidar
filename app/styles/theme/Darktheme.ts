import { ThemeOptions } from "@mui/material";
import { componetnsOverrides } from "../overrides/components";
import { typographyStylesOverrides } from "../overrides/components/TypographyFont";

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    text: {
      primary: "#000000",
      secondary: "#ffffff",
      link: "#b3b3b3",
      danger: "#eb2735",
    },
    background: {
      default: "#ffffff",
      header: "#f8f7f4",
      danger: "#eb2735",
      footer: "#f2ede7",
      warning: "#ff862d",
      paper: "#ffffff",
    },
    primary: {
      main: "#23273b",
    },
  },
  components: {
    ...componetnsOverrides,
  },
  typography: { ...typographyStylesOverrides },
};

export default darkThemeOptions;
