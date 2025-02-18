import { notFound } from "next/navigation";
import React from "react";
import { productsData } from "./data";

interface Props {
  params: Promise<{ category: string }>;
}
const CategoryPage = async ({ params }: Props) => {
  const { category } = await params;
  const products = productsData[category];

  if (!products) notFound();

  console.log("products", products);

  return <div>page</div>;
};

export default CategoryPage;
