import { Stack, Box, Typography, SxProps } from "@mui/material";
import Image from "next/image";
import React from "react";

const carouselImageWrapperStyles2: SxProps = {
  height: "300px",
  width: "350px",
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
}

const ItemCardTwo: React.FC<ItemCardTwoProps> = ({
  imageUrl,
  title,
  price,
}) => {
  return (
    <Stack sx={{ justifyContent: "center", alignItems: "center" }} spacing={1}>
      <Box sx={carouselImageWrapperStyles2}>
        <Image alt="lamb" src={imageUrl} height={250} width={250} />
      </Box>
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: 300,
          letterSpacing: "2px",
          textAlign: "start",
        }}
      >
        {title}
      </Typography>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        textAlign={"start"}
        width={220}
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
        sx={{ fontSize: "12px", letterSpacing: "2px", textAlign: "start" }}
        width={220}
      >
        flere størrelser
      </Typography>
    </Stack>
  );
};

export default ItemCardTwo;
