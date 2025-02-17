import { CSSProperties } from "react";

export interface HeaderStylesProps extends Omit<CSSProperties, "height"> {
  height: { xs: number; md: number };
}

export interface HeaderSpacing {
  H_MOBILE: number;
  H_MAIN_DESKTOP: number;
}
