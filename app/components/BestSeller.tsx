import { Stack, SxProps } from "@mui/material";
import React from "react";
import { bestSellerAssets } from "../utils/GlobalAssets";
import CustomeContainer from "./CustomeContainer";
import { ItemsCard } from "./ItemsCard";

const sellerItemsContainerStyles: SxProps = {
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
  gap: "40px",
  justifyContent: { xs: "center", xl: "space-around" },
};

const BestSeller: React.FC = () => {
  return (
    <CustomeContainer>
      <Stack sx={sellerItemsContainerStyles}>
        {bestSellerAssets.map((bstSeller, index) => {
          return (
            <ItemsCard
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

export default BestSeller;
