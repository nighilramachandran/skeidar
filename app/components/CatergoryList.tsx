import React from "react";
import CustomLink from "./CustomLink";
import { UrlObject } from "url";
import { SxProps } from "@mui/material";
import { Box } from "@mui/system";

interface CategoryListProps {
  direction?: "horizontal" | "vertical";
}

interface CategoryListValues {
  name: string;
  value: number;
  translationKey: string;
  href: string | UrlObject;
}

const categoryList: CategoryListValues[] = [
  {
    name: "home",
    value: 0,
    translationKey: "Hjem",
    href: "/",
  },
  {
    name: "all products",
    value: 1,
    translationKey: "Alle produkter",
    href: "/",
  },
  {
    name: "all beds",
    value: 2,
    translationKey: "Alle senger",
    href: "/",
  },
  {
    name: "continental beds",
    value: 3,
    translationKey: "Kontinentalsengr",
    href: "/",
  },
];

const categoryListStyles: SxProps = {
  height: "60px",
  width: "100%",
  padding: "10px",
  display: "flex",
  alignItems: "center",
  marginLeft: "20px",
  gap: "10px",
};

const CatergoryList: React.FC<CategoryListProps> = ({
  direction = "horizontal",
}) => {
  console.log("direction", direction);
  return (
    <Box sx={{ ...categoryListStyles }}>
      {categoryList.map((cat) => {
        return (
          <CustomLink key={cat.name} href={cat.href}>
            {cat.translationKey}
          </CustomLink>
        );
      })}
    </Box>
  );
};

export default CatergoryList;
