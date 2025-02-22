import { Box, Stack, SxProps, Typography } from "@mui/material";
import React from "react";
import CategoryCard from "../components/CategoryCard";
import Hero from "../components/Hero";
import { Product, productsData } from "./data";
import Notfound from "./not-found";

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

  if (!products) {
    return <Notfound />;
  }

  return (
    <React.Fragment>
      <Stack spacing={10}>
        <CategoryItems products={products} />
        <MessageBlock />
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

const messageBlockStyles: SxProps = {
  height: "60px",
  letterSpacing: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "text.secondary",
  bgcolor: "background.danger",
};

const MessageBlock: React.FC = () => {
  return (
    <Box sx={messageBlockStyles}>
      <Typography>SISTE SJANSE PÅ KUPPENE OM 23:04:02</Typography>
    </Box>
  );
};

export default CategoryPage;

// Dynamics

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const categoryData = productsData[category];

  if (!categoryData) {
    return {
      title: "Category Not Found",
      description: "Sorry, we couldn't find any products for this category.",
    };
  }

  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
  const description = `Explore our ${categoryName} collection with exclusive deals and offers.`;

  return {
    title: `${categoryName} - Shop Now`,
    description: description,
  };
}

export function generateStaticParams() {
  const categories = Object.keys(productsData);

  return categories.map((category) => ({
    category,
  }));
}
