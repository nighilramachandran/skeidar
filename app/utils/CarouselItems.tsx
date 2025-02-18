import { Box, Stack, SxProps, Typography } from "@mui/material";
import { ItemPrpos } from "../components/Carousel";
import Image from "next/image";
import ItemCardTwo from "../components/ItemCardTwo";

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
  { length: 10 },
  (_, index) => ({
    name: `Item ${index + 1}`,
    item: (
      <Stack
        sx={{ justifyContent: "center", alignItems: "center" }}
        spacing={1}
      >
        <Box sx={carouselImageWrapperStyles}>
          <Image
            alt="lamb"
            src="/images/nightlamb.png"
            height={200}
            width={200}
          />
        </Box>
        <Typography sx={{ fontSize: "20px", fontWeight: 900 }}>
          nå 79.999
        </Typography>
        <Typography sx={{ fontSize: "12px", color: "text.link" }}>
          Leah{" "}
          <Box
            component="span"
            sx={{
              textDecoration: "line-through",
            }}
          >
            99.999
          </Box>
        </Typography>
      </Stack>
    ),
  })
);

export const carouselItems2: ItemPrpos[] = Array.from(
  { length: 10 },
  (_, index) => ({
    name: `Item ${index + 1}`,
    item: (
      <ItemCardTwo
        imageUrl={"/images/chair.png"}
        price={99.999}
        title={
          <>
            Jensen
            <br /> Glow Kontintentalseng
          </>
        }
      />
    ),
  })
);
