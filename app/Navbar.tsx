import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import {
  appBarStyles,
  CampaingStyles,
  headerStyles,
} from "./utils/LayoutConfig";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <AppBar sx={{ ...appBarStyles }}>
      <CampaignMessage />
      <Toolbar disableGutters sx={{ ...headerStyles }}>
        <Image
          src={"https://www.skeidar.no/globalassets/skeidar-logo_white.png"}
          alt="skeidar-logo_white"
          width={300}
          height={30}
        ></Image>
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
