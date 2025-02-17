import React from "react";
import Drawer from "@mui/material/Drawer";

interface AppDrawerProps {
  open: boolean;
  onClose: () => void;
}
const AppDrawer: React.FC<AppDrawerProps> = ({ open, onClose }) => {
  return (
    <Drawer open={open} onClose={onClose}>
      Drawer
    </Drawer>
  );
};

export default AppDrawer;
