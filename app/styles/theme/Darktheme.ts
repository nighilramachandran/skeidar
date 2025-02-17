import { ThemeOptions } from "@mui/material";
import { componetnsOverrides } from "../overrides/components";
import { typographyStylesOverrides } from "../overrides/components/TypographyFont";

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    text: {
      primary: "#FFFFFF",
      secondary: "#DDDDDD",
    },
    background: {
      default: "#181A21",
      header: "#272a3e",
      paper: "#27405a",
      secondary: "#DDDDDD",
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
