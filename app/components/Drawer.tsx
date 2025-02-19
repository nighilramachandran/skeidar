import React from "react";
import Drawer, { drawerClasses } from "@mui/material/Drawer";
import { Box } from "@mui/material";
import CatergoryList from "./CatergoryList";

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
      <CatergoryList
        direction="vertical"
        device="mobile"
        onCategorySelect={onClose}
      />
    </Drawer>
  );
};

export default AppDrawer;
