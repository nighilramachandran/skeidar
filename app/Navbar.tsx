import { AppBar, Box, SxProps, Toolbar } from "@mui/material";
import React from "react";
import {
  appBarStyles,
  CampaingStyles,
  headerStyles,
} from "./utils/LayoutConfig";

const Navbar: React.FC = () => {
  return (
    <AppBar sx={{ ...appBarStyles }}>
      <CampaignMessage />
      <Toolbar disableGutters sx={{ ...headerStyles }}></Toolbar>
    </AppBar>
  );
};

const CampaignMessage = () => {
  return <Box sx={{ ...CampaingStyles }}>Hello</Box>;
};

export default Navbar;
