import { SxProps, Stack, Box, Typography } from "@mui/material";
import { bestSellerAssetsValues } from "../interfaces/Assets";
import Image from "next/image";

const itemsCardStyles: SxProps = {
  position: "relative",
  width: "300px",
  height: "300px",
};

export const ItemsCard: React.FC<bestSellerAssetsValues> = ({
  imgUrl,
  name,
  desc,
}) => {
  return (
    <Stack sx={{ textAlign: "center" }} spacing={2}>
      <Box sx={{ ...itemsCardStyles }}>
        <Image
          src={imgUrl}
          alt="Example Image"
          priority
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 600px) 100vw, 33vw"
        />
      </Box>
      <Typography sx={{ fontFamily: "Vinter-Medium", fontSize: "38px" }}>
        {name}
      </Typography>
      <Typography
        sx={{
          textDecoration: "underline",
          letterSpacing: "3px",
          cursor: "pointer",
        }}
      >
        {desc}
      </Typography>
    </Stack>
  );
};
