import { Stack, SxProps } from "@mui/material";
import { notFound } from "next/navigation";
import CategoryCard from "../components/CategoryCard";
import Hero from "../components/Hero";
import { Product, productsData } from "./data";
import React from "react";

interface Props {
  params: Promise<{ category: string }>;
}

const categoryContainerStyles: SxProps = {
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
  gap: "12px",
  justifyContent: { xs: "center", xl: "space-around" },
};

const CategoryPage = async ({ params }: Props) => {
  const { category } = await params;
  const products = productsData[category];

  if (!products) notFound();

  return (
    <React.Fragment>
      <Stack spacing={10}>
        {products && <CategoryItems products={products} />}
        <Hero />
      </Stack>
    </React.Fragment>
  );
};

interface CategoryItemsProps {
  products: Product[];
}

const CategoryItems: React.FC<CategoryItemsProps> = ({ products }) => {
  return (
    <Stack sx={categoryContainerStyles}>
      {products.length &&
        products?.map((prod, index) => {
          return (
            <CategoryCard
              key={`${index}-${prod.id}-${prod.name}`}
              imageUrl={prod.image}
              title={prod.name}
              price={prod.price}
            />
          );
        })}
    </Stack>
  );
};

export default CategoryPage;
