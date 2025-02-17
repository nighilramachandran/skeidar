import React from "react";

interface CategoryListProps {
  direction?: "horizontal" | "vertical";
}

const CatergoryList: React.FC<CategoryListProps> = ({
  direction = "horizontal",
}) => {
  console.log("direction", direction);
  return <div style={{ height: "20px", width: "100%" }}>CatergoryList</div>;
};

export default CatergoryList;
