import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import Logo from "./components/Logo";
import {
  appBarStyles,
  CampaingStyles,
  headerStyles,
} from "./utils/LayoutConfig";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

const Navbar: React.FC = () => {
  return (
    <AppBar sx={{ ...appBarStyles }}>
      <CampaignMessage />
      <Toolbar disableGutters sx={{ ...headerStyles }}>
        <Box></Box>
        <Logo />
        <ProfileAndCart />
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

const ProfileAndCart = () => {
  return (
    <Stack sx={{ flexDirection: "row", gap: "10px" }}>
      <PermIdentityOutlinedIcon sx={{ fontSize: "37px" }} />
      <LocalMallOutlinedIcon sx={{ fontSize: "37px" }} />
    </Stack>
  );
};

export default Navbar;
