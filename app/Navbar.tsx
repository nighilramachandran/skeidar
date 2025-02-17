import { AppBar, SxProps, Toolbar } from "@mui/material";
import React, { CSSProperties } from "react";

interface HeaderStylesProps extends Omit<CSSProperties, "height"> {
  height: { xs: number; md: number };
}

interface HeaderSpacing {
  H_MOBILE: number;
  H_MAIN_DESKTOP: number;
}

const HEADER_SPACINGS: HeaderSpacing = {
  H_MOBILE: 80,
  H_MAIN_DESKTOP: 140,
};

const appBarStyles: SxProps = {
  position: "relative",
  bgcolor: "background.header",
  boxShadow: "none",
  padding: 0,
};

const headerStyles: HeaderStylesProps = {
  height: {
    xs: HEADER_SPACINGS.H_MOBILE,
    md: HEADER_SPACINGS.H_MAIN_DESKTOP,
  },
  padding: 2,
  justifyContent: "space-between",
  position: "relative",
};

const Navbar: React.FC = () => {
  return (
    <AppBar sx={{ ...appBarStyles }}>
      <Toolbar disableGutters sx={{ ...headerStyles }}></Toolbar>
    </AppBar>
  );
};

export default Navbar;
