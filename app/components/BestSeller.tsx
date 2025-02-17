import React from "react";
import CustomeContainer from "./CustomeContainer";
import { Box, Stack, SxProps } from "@mui/material";
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
  justifyContent: "center",
};

const BestSeller: React.FC = () => {
  return (
    <CustomeContainer>
      <Stack
        sx={{
          ...sellerItemsContainerStyles,
        }}
      >
        {bestSellerAssets.map((bstSeller, index) => {
          return <SellerComponent key={index} assets={bstSeller.imgUrl} />;
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

interface SellerComponentValues {
  assets: string;
}

const SellerComponent: React.FC<SellerComponentValues> = ({ assets }) => {
  return (
    <Box sx={{ ...sellerComponent }}>
      <Image
        src={assets}
        alt="Example Image"
        priority
        fill
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
};

export default BestSeller;
