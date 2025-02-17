/* eslint-disable @typescript-eslint/no-empty-object-type */
declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {}
  interface TypeText {
    dark: string;
    danger: string;
    link: string;
  }
  interface TypeBackground {
    header: string;
    secondary: string;
    paper: string;
    danger: string;
  }
}

export * from "./Darktheme";
