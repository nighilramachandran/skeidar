import { Box, SxProps } from "@mui/material";
import { ItemPrpos } from "../components/Carousel";
import Image from "next/image";

const carouselImageWrapperStyles: SxProps = {
  height: "250px",
  width: "250px",
  background: "#f2ede7",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
};

export const carouselItems1: ItemPrpos[] = Array.from(
  { length: 6 },
  (_, index) => ({
    name: `Item ${index + 1}`,
    item: (
      <Box sx={carouselImageWrapperStyles}>
        <Image
          alt="lamb"
          src="/images/nightlamb.png"
          height={200}
          width={200}
        />
      </Box>
    ),
  })
);
