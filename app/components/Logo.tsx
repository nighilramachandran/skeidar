import { SxProps, Typography } from "@mui/material";
import React from "react";

const LogoStyles: SxProps = {
  textTransform: "uppercase",
  fontWeight: 900,
  fontSize: "40px",
  letterSpacing: "15px",
};

const Logo: React.FC = () => {
  return (
    <Typography variant="h1" sx={{ ...LogoStyles }}>
      Skeidar
    </Typography>
  );
};

export default Logo;
