"use client";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import React, { useState } from "react";
import CatergoryList from "./components/CatergoryList";
import AppDrawer from "./components/Drawer";
import Logo, { LogoSmall } from "./components/Logo";
import { ProfileAndCart } from "./components/ProfileAndCart";
import { appBarStyles, headerStyles } from "./utils/LayoutConfig";
import MessageLine from "./components/MessageLine";

const Navbar: React.FC = () => {
  return (
    <AppBar sx={{ ...appBarStyles }}>
      <MessageLine />
      <ToolBar />
      <Box className="hideOnMobile">
        <CatergoryList />
      </Box>
    </AppBar>
  );
};

const ToolBar: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
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
  );
};
export default Navbar;
