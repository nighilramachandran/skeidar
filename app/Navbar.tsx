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
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import AppDrawer from "./components/Drawer";
import Logo from "./components/Logo";
import {
  appBarStyles,
  CampaingStyles,
  headerStyles,
} from "./utils/LayoutConfig";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
    noSsr: true,
  });

  const { t, i18n } = useTranslation();

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
        <ProfileAndCart isDesktop={isDesktop} />
      </Toolbar>
    </AppBar>
  );
};

const CampaignMessage = () => {
  const { t, i18n } = useTranslation();

  return (
    <Box sx={{ ...CampaingStyles }}>
      <Typography>{t("CAMPAIGN_MESSAGE")}</Typography>
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
      <Badge badgeContent={4} color="primary">
        <LocalMallOutlinedIcon sx={{ fontSize: "37px" }} />
      </Badge>
    </Stack>
  );
};

export default Navbar;
