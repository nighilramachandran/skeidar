import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import React from "react";

const categoryCardStyles: SxProps = {
  height: "334px",
  width: "448px",
  background: "red",
  position: "relative",
};

interface CategoryCardProps {
  imageUrl: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ imageUrl }) => {
  return (
    <Box sx={categoryCardStyles}>
      <Image
        src={imageUrl}
        alt="Example Image"
        priority
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 600px) 100vw, 33vw"
      />
    </Box>
  );
};

export default CategoryCard;
