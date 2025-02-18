"use client";
import { SxProps } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { UrlObject } from "url";
import CustomLink from "./CustomLink";
import { usePathname } from "next/navigation";
import { ROUTES } from "../utils/RouteConfig";

interface CategoryListProps {
  direction?: "horizontal" | "vertical";
}

interface CategoryListValues {
  name: string;
  translationKey: string;
  href: string | UrlObject;
}

const { ROOT, ALL_PRODUCTS, ALL_SOFA, CONTINENTAL_BEDS } = ROUTES;

const categoryList: CategoryListValues[] = [
  { name: "home", translationKey: "Hjem", href: ROOT },
  {
    name: "all products",
    translationKey: "Alle produkter",
    href: ALL_PRODUCTS,
  },
  { name: "all sofa", translationKey: "alle sofa", href: ALL_SOFA },
  {
    name: "continental beds",
    translationKey: "Kontinentalsenger",
    href: CONTINENTAL_BEDS,
  },
];

const categoryListStyles: SxProps = {
  height: "60px",
  width: "100%",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const CatergoryList: React.FC<CategoryListProps> = ({
  direction = "horizontal",
}) => {
  const pathname = usePathname();

  return (
    <Box
      sx={{
        ...categoryListStyles,
        flexDirection: direction === "horizontal" ? "row" : "column",
        bgcolor: "background.default",
      }}
    >
      {categoryList.map((cat, index) => {
        return (
          <React.Fragment key={cat.name}>
            <CustomLink
              href={`/${cat.href}`}
              sx={{
                color:
                  pathname === cat.href
                    ? "text.primary"
                    : pathname === `/${cat.href}`
                    ? "text.primary"
                    : "",
              }}
            >
              {cat.translationKey}
            </CustomLink>
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
