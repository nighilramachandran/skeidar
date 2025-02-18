import React from "react";
import CustomeContainer from "./CustomeContainer";
import { Box, Stack, SxProps, Typography } from "@mui/material";
import Image from "next/image";
import {
  imageUrl1,
  imageUrl2,
  imageUrl3,
  imageUrl4,
} from "../utils/GlobalAssets";

interface bestSellerAssetsValues {
  name: string;
  imgUrl: string;
  desc: string;
}

const bestSellerAssets: bestSellerAssetsValues[] = [
  { name: "Opptil 60%", imgUrl: imageUrl1, desc: "SE MODULSOFAER" },
  { name: "Enjoy modulsofa", imgUrl: imageUrl4, desc: "SE MER HER" },
  { name: "Hedda modulsofa", imgUrl: imageUrl3, desc: "SE MER HER" },
  { name: "Enjoy modulsofa", imgUrl: imageUrl2, desc: "SE MER HER" },
];

const sellerItemsContainerStyles: SxProps = {
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
  gap: "40px",
};

const BestSeller: React.FC = () => {
  return (
    <CustomeContainer>
      <Stack
        sx={{
          ...sellerItemsContainerStyles,
          justifyContent: { xs: "center", xl: "space-around" },
        }}
      >
        {bestSellerAssets.map((bstSeller, index) => {
          return (
            <SellerComponent
              key={index}
              imgUrl={bstSeller.imgUrl}
              name={bstSeller.name}
              desc={bstSeller.desc}
            />
          );
        })}
      </Stack>
    </CustomeContainer>
  );
};

const sellerComponent: SxProps = {
  position: "relative",
  width: "300px",
  height: "300px",
};

const SellerComponent: React.FC<bestSellerAssetsValues> = ({
  imgUrl,
  name,
  desc,
}) => {
  return (
    <Stack sx={{ textAlign: "center" }} spacing={2}>
      <Box sx={{ ...sellerComponent }}>
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

export default BestSeller;
