export interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
}

export type ProductCategory = Record<string, Product[]>;

export const productsData: ProductCategory = {
  "all-products": [
    {
      id: 1,
      name: "Sofa",
      image: "https://via.placeholder.com/150",
      price: "$500",
    },
    {
      id: 2,
      name: "Chair",
      image: "https://via.placeholder.com/150",
      price: "$100",
    },
  ],
  "all-beds": [
    {
      id: 1,
      name: "King Size Bed",
      image: "https://via.placeholder.com/150",
      price: "$1200",
    },
    {
      id: 2,
      name: "Queen Size Bed",
      image: "https://via.placeholder.com/150",
      price: "$900",
    },
  ],
  "continental-beds": [
    {
      id: 1,
      name: "Luxury Continental Bed",
      image: "https://via.placeholder.com/150",
      price: "$1500",
    },
  ],
};
