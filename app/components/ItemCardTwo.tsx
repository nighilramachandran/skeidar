import { Stack, Box, Typography, SxProps } from "@mui/material";
import Image from "next/image";
import React from "react";

const carouselImageWrapperStyles2: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  filter: "drop-shadow(2px 4px 13px black)",
};

interface ItemCardTwoProps {
  imageUrl: string;
  title: React.ReactNode;
  price: number;
  imageHeight?: number;
  imageWidth?: number;
  shadow?: boolean;
}

const ItemCardTwo: React.FC<ItemCardTwoProps> = ({
  imageUrl,
  title,
  price,
  imageHeight = 300,
  imageWidth = 350,
  shadow = false,
}) => {
  return (
    <Stack sx={{ justifyContent: "center", alignItems: "center" }} spacing={1}>
      <Box
        sx={{
          ...carouselImageWrapperStyles2,
          filter: shadow ? "drop-shadow(2px 4px 13px black)" : "",
        }}
        height={imageHeight}
        width={imageWidth}
      >
        <Image
          alt="lamb"
          src={imageUrl}
          height={imageHeight}
          width={imageWidth}
        />
      </Box>
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: 300,
          letterSpacing: "2px",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        textAlign={"center"}
        gap={3}
      >
        <Typography sx={{ fontSize: "20px", fontWeight: 900 }}>
          nå {price - 20.009}
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            color: "text.link",
            textDecoration: "line-through",
          }}
        >
          {price}
        </Typography>
      </Stack>
      <Typography
        sx={{ fontSize: "12px", letterSpacing: "2px", textAlign: "center" }}
      >
        flere størrelser
      </Typography>
    </Stack>
  );
};

export default ItemCardTwo;
