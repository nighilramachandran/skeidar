"use client";
import { SxProps } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { UrlObject } from "url";
import CustomLink from "./CustomLink";
import { usePathname } from "next/navigation";

interface CategoryListProps {
  direction?: "horizontal" | "vertical";
}

interface CategoryListValues {
  name: string;
  translationKey: string;
  href: string | UrlObject;
}

const categoryList: CategoryListValues[] = [
  { name: "home", translationKey: "Hjem", href: "/" },
  { name: "all products", translationKey: "Alle produkter", href: "/products" },
  { name: "all beds", translationKey: "Alle senger", href: "/beds" },
  {
    name: "continental beds",
    translationKey: "Kontinentalsenger",
    href: "/continental-beds",
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
              href={cat.href}
              sx={{ color: pathname === cat.href ? "text.primary" : "" }}
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
