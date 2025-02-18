import { Box, Stack, SxProps, Typography } from "@mui/material";
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
const carouselImageWrapperStyles2: SxProps = {
  height: "300px",
  width: "350px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  filter: "drop-shadow(2px 4px 13px black)",
};

export const carouselItems1: ItemPrpos[] = Array.from(
  { length: 6 },
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
  { length: 6 },
  (_, index) => ({
    name: `Item ${index + 1}`,
    item: (
      <Stack
        sx={{ justifyContent: "center", alignItems: "center" }}
        spacing={1}
      >
        <Box sx={carouselImageWrapperStyles2}>
          <Image alt="lamb" src="/images/chair.png" height={250} width={250} />
        </Box>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 300,
            letterSpacing: "2px",
            textAlign: "start",
          }}
        >
          Jensen
          <br /> Glow Kontintentalseng
        </Typography>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          textAlign={"start"}
          width={220}
          gap={3}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: 900 }}>
            nå 79.999
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              color: "text.link",
              textDecoration: "line-through",
            }}
          >
            99.999
          </Typography>
        </Stack>
        <Typography
          sx={{ fontSize: "12px", letterSpacing: "2px", textAlign: "start" }}
          width={220}
        >
          flere størrelser
        </Typography>
      </Stack>
    ),
  })
);
