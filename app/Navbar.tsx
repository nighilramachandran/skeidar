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
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import CatergoryList from "./components/CatergoryList";
import AppDrawer from "./components/Drawer";
import Logo, { LogoSmall } from "./components/Logo";
import {
  appBarStyles,
  CampaingStyles,
  headerStyles,
} from "./utils/LayoutConfig";

const Navbar: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <AppBar sx={{ ...appBarStyles }}>
      <CampaignMessage />
      <Toolbar disableGutters sx={{ ...headerStyles }}>
        <Box className="showOnMobile">
          <IconButton onClick={toggleDrawer}>
            <MenuIcon sx={{ color: "text.primary", fontSize: "37px" }} />
          </IconButton>
        </Box>
        <AppDrawer open={openDrawer} onClose={toggleDrawer} />
        <Box className="centerLogo">
          <Box className="showOnMobile">
            <LogoSmall />
          </Box>
          <Box className="hideOnMobile">
            <Logo />
          </Box>
        </Box>
        <Box className="hideOnMobile">
          <ProfileAndCart />
        </Box>
      </Toolbar>
      <Box className="hideOnMobile">
        <CatergoryList />
      </Box>
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
        transition: "background-color 0.5s ease-in-out",
      }}
    >
      <Typography>CAMPAIGN MESSAGE LINE WITH MOVEMENT</Typography>
    </Box>
  );
};

export const ProfileAndCart: React.FC = () => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        gap: "15px",
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
