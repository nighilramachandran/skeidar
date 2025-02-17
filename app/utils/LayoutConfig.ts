import { SxProps } from "@mui/material";
import { HeaderSpacing, HeaderStylesProps } from "../interfaces";

const HEADER_SPACINGS: HeaderSpacing = {
  H_MOBILE: 80,
  H_MAIN_DESKTOP: 140,
};

export const appBarStyles: SxProps = {
  position: "relative",
  bgcolor: "background.header",
  boxShadow: "none",
  padding: 0,
};

export const headerStyles: HeaderStylesProps = {
  height: {
    xs: HEADER_SPACINGS.H_MOBILE,
    md: HEADER_SPACINGS.H_MAIN_DESKTOP,
  },
  padding: 2,
  justifyContent: "space-between",
  position: "relative",
};

export const CampaingStyles: SxProps = {
  height: "60px",
  bgcolor: "background.danger",
  letterSpacing: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "text.secondary",
};
