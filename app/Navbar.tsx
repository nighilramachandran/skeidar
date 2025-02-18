"use client";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CatergoryList from "./components/CatergoryList";
import AppDrawer from "./components/Drawer";
import Logo from "./components/Logo";
import useResponsive from "./hooks/useResponsive";
import {
  appBarStyles,
  CampaingStyles,
  headerStyles,
} from "./utils/LayoutConfig";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const isDesktop = useResponsive("up", "md");

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <AppBar sx={{ ...appBarStyles }}>
      <CampaignMessage />
      <Toolbar disableGutters sx={{ ...headerStyles }}>
        <IconButton
          onClick={toggleDrawer}
          sx={{ opacity: !isDesktop ? 1 : 0, transition: "opacity 0.3s" }}
        >
          <MenuIcon sx={{ color: "text.primary", fontSize: "37px" }} />
        </IconButton>

        <AppDrawer open={openDrawer} onClose={toggleDrawer} />
        <Logo />
        <ProfileAndCart isDesktop={isDesktop ?? false} />
      </Toolbar>
      <CatergoryList />
    </AppBar>
  );
};

const CampaignMessage = () => {
  const pathname = usePathname();
  return (
    <Box
      sx={{
        ...CampaingStyles,
        bgcolor: pathname === "/" ? "background.danger" : "background.warning",
      }}
    >
      <Typography>CAMPAIGN MESSAGE LINE WITH MOVEMENT</Typography>
    </Box>
  );
};

interface ProfileAndCartProps {
  isDesktop: boolean;
}

const ProfileAndCart: React.FC<ProfileAndCartProps> = ({ isDesktop }) => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        gap: "15px",
        opacity: isDesktop ? 1 : 0,
        transition: "opacity 0.3s",
      }}
    >
      <PermIdentityOutlinedIcon sx={{ fontSize: "37px" }} />
      <Badge badgeContent={4} color="info">
        <LocalMallOutlinedIcon sx={{ fontSize: "37px" }} />
      </Badge>
    </Stack>
  );
};

export default Navbar;
