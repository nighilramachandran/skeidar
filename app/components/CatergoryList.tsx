import { SxProps } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { UrlObject } from "url";
import CustomLink from "./CustomLink";

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
  return (
    <Box
      sx={{
        ...categoryListStyles,
        flexDirection: direction === "horizontal" ? "row" : "column",
      }}
    >
      {categoryList.map((cat, index) => {
        return (
          <React.Fragment key={cat.name}>
            <CustomLink href={cat.href}>{cat.translationKey}</CustomLink>
            {direction === "horizontal" &&
              categoryList.length - 1 !== index && (
                <span style={{ color: "#b3b3b3" }}>|</span>
              )}
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default CatergoryList;
