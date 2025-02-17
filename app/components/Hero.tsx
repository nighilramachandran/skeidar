import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import React from "react";

const heroStyles: SxProps = {
  position: "relative",
  width: "100%",
  height: "600px",
};

const imageUrl =
  "https://www.skeidar.no/globalassets/rom-bor-ryddes/alle-rom-2023/stue/1388002_boxsofamiljo1.jpg?crop=(0.10317460317460317%2C0.2651744842756078%2C0%2C0.0273764936686286)&width=2560&height=1348";

const Hero: React.FC = () => {
  return (
    <Box sx={{ ...heroStyles }}>
      <Image
        src={imageUrl}
        alt="Example Image"
        priority
        fill
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
};

export default Hero;
