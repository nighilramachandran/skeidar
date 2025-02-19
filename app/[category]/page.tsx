import { Box, Stack, SxProps } from "@mui/material";
import Image from "next/image";
import { notFound } from "next/navigation";
import CustomeContainer from "../components/CustomeContainer";
import Hero from "../components/Hero";
import { productsData } from "./data";
import CategoryCard from "../components/CategoryCard";

interface Props {
  params: Promise<{ category: string }>;
}

const categoryContainerStyles: SxProps = {
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
  gap: "5px",
  justifyContent: { xs: "center", xl: "space-around" },
};

const CategoryPage = async ({ params }: Props) => {
  const { category } = await params;
  const products = productsData[category];

  if (!products) notFound();

  return (
    <CustomeContainer>
      <Stack sx={categoryContainerStyles}>
        {products.length &&
          products?.map((prod, index) => {
            return (
              <CategoryCard
                key={`${index}-${prod.id}-${prod.name}`}
                imageUrl={prod.image}
              />
            );
          })}
      </Stack>
      <Hero />
    </CustomeContainer>
  );
};

export default CategoryPage;
