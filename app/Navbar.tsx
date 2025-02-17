import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import Logo from "./components/Logo";
import {
  appBarStyles,
  CampaingStyles,
  headerStyles,
} from "./utils/LayoutConfig";

const Navbar: React.FC = () => {
  return (
    <AppBar sx={{ ...appBarStyles }}>
      <CampaignMessage />
      <Toolbar disableGutters sx={{ ...headerStyles }}>
        <Logo />
      </Toolbar>
    </AppBar>
  );
};

const CampaignMessage = () => {
  return (
    <Box sx={{ ...CampaingStyles }}>
      <Typography>CAMPAIGN MESSAGE LINE WITH MOVEMENT</Typography>
    </Box>
  );
};

export default Navbar;
