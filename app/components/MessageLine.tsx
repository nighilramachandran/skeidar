"use client";

import { Box, styled, Typography } from "@mui/material";
import { m, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CampaingStyles } from "../utils/LayoutConfig";

const variant: Variants = {
  initial: {
    x: "0vw",
  },
  secondaryInitial: {
    x: "100vw",
  },
  animate: {
    x: "-100vw",
    transition: {
      duration: 10,
      ease: "linear",
    },
  },
};

const MessageLine: React.FC = () => {
  const [firstAnimationCompleted, setFirstAnimationCompleted] =
    useState<boolean>(false);
  const [animationKey, setAnimationKey] = useState(0);
  const pathname = usePathname();

  const handleFirstAnimationComplete = () => {
    setFirstAnimationCompleted(true);
    setAnimationKey((prevKey) => prevKey + 1);
  };

  return (
    <Box
      sx={{
        ...CampaingStyles,
        bgcolor: pathname === "/" ? "background.danger" : "background.warning",
        transition: "background-color 0.5s ease-in-out",
      }}
    >
      <Box
        key={animationKey}
        component={m.div}
        initial={firstAnimationCompleted ? "secondaryInitial" : "initial"}
        animate="animate"
        variants={variant}
        onAnimationComplete={handleFirstAnimationComplete}
      >
        <Typography>CAMPAIGN MESSAGE LINE WITH MOVEMENT</Typography>
      </Box>
    </Box>
  );
};

export default MessageLine;
