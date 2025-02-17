import { ThemeOptions } from "@mui/material";
import { componetnsOverrides } from "../overrides/components";
import { typographyStylesOverrides } from "../overrides/components/TypographyFont";

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    text: {
      primary: "#000000",
      secondary: "#ffffff",
    },
    background: {
      default: "#ffffff",
      header: "#f8f7f4",
      danger: "#eb2735",
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
