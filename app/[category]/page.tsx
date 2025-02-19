import { Box, Stack, SxProps } from "@mui/material";
import Image from "next/image";
import { notFound } from "next/navigation";
import CustomeContainer from "../components/CustomeContainer";
import Hero from "../components/Hero";
import { productsData } from "./data";

interface Props {
  params: Promise<{ category: string }>;
}

const sellerItemsContainerStyles: SxProps = {
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
  gap: "5px",
};
const CategoryPage = async ({ params }: Props) => {
  const { category } = await params;
  const products = productsData[category];

  if (!products) notFound();

  return (
    <CustomeContainer>
      <Stack
        sx={{
          ...sellerItemsContainerStyles,
          justifyContent: { xs: "center", xl: "space-around" },
        }}
      >
        {products.length &&
          products?.map((prod, index) => {
            return (
              <Box
                key={`${index}-${prod.id}-${prod.name}`}
                sx={{
                  height: "334px",
                  width: "448px",
                  background: "red",
                  position: "relative",
                }}
              >
                <Image
                  src={prod.image}
                  alt="Example Image"
                  priority
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 600px) 100vw, 33vw"
                />
              </Box>
            );
          })}
      </Stack>
      <Hero />
    </CustomeContainer>
  );
};

export default CategoryPage;
