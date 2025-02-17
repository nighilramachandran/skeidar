import { Components } from "@mui/material/styles";

export const linkOverride: Components = {
  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: "none",
        fontSize: "16px",
        fontWeight: "bold",

        "&:hover": {
          opacity: 0.48,
        },
      },
    },
    variants: [],
  },
};
