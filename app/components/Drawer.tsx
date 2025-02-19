import React from "react";
import Drawer, { drawerClasses } from "@mui/material/Drawer";
import { Box, Stack } from "@mui/material";
import CatergoryList from "./CatergoryList";
import { ProfileAndCart } from "../Navbar";

interface AppDrawerProps {
  open: boolean;
  onClose: () => void;
}
const AppDrawer: React.FC<AppDrawerProps> = ({ open, onClose }) => {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      sx={{ [`.${drawerClasses.paper}`]: { borderRadius: 0 } }}
    >
      <Stack
        spacing={2}
        sx={{
          height: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CatergoryList
          direction="vertical"
          device="mobile"
          onCategorySelect={onClose}
        />
        <ProfileAndCart />
      </Stack>
    </Drawer>
  );
};

export default AppDrawer;
