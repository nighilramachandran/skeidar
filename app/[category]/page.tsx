import { notFound } from "next/navigation";
import React from "react";
import { productsData } from "./data";
import ItemCardTwo from "../components/ItemCardTwo";
import { Grid2, Stack } from "@mui/material";
import Hero from "../components/Hero";

interface Props {
  params: Promise<{ category: string }>;
}
const CategoryPage = async ({ params }: Props) => {
  const { category } = await params;
  const products = productsData[category];

  if (!products) notFound();

  return (
    <Stack spacing={5} padding={"30px 0px"}>
      <Grid2 container>
        {products.length &&
          products?.map((prod, index) => {
            return (
              <Grid2 size={{ xs: 12, lg: 6 }} key={index}>
                <ItemCardTwo
                  key={`${index}-${prod.id}-${prod.name}`}
                  title={prod.name}
                  imageUrl={prod.image}
                  price={prod.price}
                />
              </Grid2>
            );
          })}
      </Grid2>
      <Hero />
    </Stack>
  );
};

export default CategoryPage;
