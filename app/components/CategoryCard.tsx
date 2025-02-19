import { Box, SxProps, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import React from "react";

const categoryCardContainerStyles: SxProps = {
  height: "430px",
  width: "448px",
  position: "relative",
  justifyContent: "space-between",
  "@media (max-width: 600px)": {
    height: "auto",
    width: "100%",
    padding: "10px",
  },
};

interface CategoryCardProps {
  imageUrl: string;
  title: string;
  price: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  imageUrl,
  title,
  price,
}) => {
  return (
    <Stack sx={categoryCardContainerStyles} spacing={2}>
      <ImageContainer imageUrl={imageUrl} />
      <Stack
        height={96}
        justifyContent={"space-between"}
        sx={{
          "@media (max-width: 600px)": {
            height: "auto",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 300,
            letterSpacing: "2px",
            "@media (max-width: 600px)": {
              fontSize: "16px",
            },
          }}
        >
          {title}
        </Typography>
        <Pricing price={price} />
        <ChooseColor />
      </Stack>
    </Stack>
  );
};

const imageContainerStyles: SxProps = {
  height: "334px",
  width: "448px",
  position: "relative",
  "@media (max-width: 600px)": {
    height: "250px",
    width: "100%",
  },
};

interface ImageContainerProps {
  imageUrl: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ imageUrl }) => {
  return (
    <Box sx={imageContainerStyles}>
      <Image
        src={imageUrl}
        alt="Example Image"
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 600px) 100vw, 33vw"
        priority
      />
      <OfferTag />
    </Box>
  );
};

const offerTagStyles: SxProps = {
  height: "40px",
  width: "100px",
  bgcolor: "background.warning",
  position: "absolute",
  right: 0,
  top: 35,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const OfferTag: React.FC = () => {
  return (
    <Box sx={offerTagStyles}>
      <Typography
        sx={{ fontWeight: 900, color: "text.secondary", letterSpacing: "2px" }}
      >
        50%
      </Typography>
    </Box>
  );
};

const ChooseColor: React.FC = () => {
  const colors = ["#e6e6e6", "#d0c9b6", "#4d4d4d"];
  return (
    <Stack flexDirection={"row"} justifyContent={"space-between"}>
      <Typography
        sx={{
          fontSize: "12px",
          letterSpacing: "2px",
          textAlign: "start",
          "@media (max-width: 600px)": {
            fontSize: "10px",
          },
        }}
      >
        flere størrelser
      </Typography>
      <Stack flexDirection={"row"} gap={1}>
        {colors.map((color, index) => {
          return (
            <Box
              key={`${index}=${color}`}
              sx={{
                height: "20px",
                width: "20px",
                borderRadius: "50%",
                background: `${color}`,
              }}
            ></Box>
          );
        })}
      </Stack>
    </Stack>
  );
};

interface PricingProps {
  price: number;
}

const Pricing: React.FC<PricingProps> = ({ price }) => {
  return (
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Typography sx={{ fontSize: "20px", fontWeight: 900 }}>
        nå {price - 20.009}
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
          color: "text.link",
          textDecoration: "line-through",
          "@media (max-width: 600px)": {
            fontSize: "16px",
          },
        }}
      >
        {price}
      </Typography>
    </Stack>
  );
};

export default CategoryCard;
