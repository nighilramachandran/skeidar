"use client";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Logo from "./components/Logo";
import {
  appBarStyles,
  CampaingStyles,
  headerStyles,
} from "./utils/LayoutConfig";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AppDrawer from "./components/Drawer";
import useResponsive from "./hooks/useResponsive";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const isDesktop = useResponsive("up", "md");
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  if (!isMounted) return null;

  return (
    <AppBar sx={{ ...appBarStyles }}>
      <CampaignMessage />
      <Toolbar disableGutters sx={{ ...headerStyles }}>
        {!isDesktop ? (
          <IconButton onClick={toggleDrawer}>
            <MenuIcon sx={{ color: "text.primary", fontSize: "37px" }} />
          </IconButton>
        ) : (
          <Box></Box>
        )}
        <AppDrawer open={openDrawer} onClose={toggleDrawer} />
        <Logo />

        {isDesktop ? <ProfileAndCart /> : <Box></Box>}
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
    <Stack sx={{ flexDirection: "row", gap: "15px" }}>
      <PermIdentityOutlinedIcon sx={{ fontSize: "37px" }} />
      <Badge badgeContent={4} color="primary">
        <LocalMallOutlinedIcon sx={{ fontSize: "37px" }} />
      </Badge>
    </Stack>
  );
};

export default Navbar;
