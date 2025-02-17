import { Components, Theme } from "@mui/material/styles";

export const linkOverride: Components<Theme> = {
  MuiLink: {
    styleOverrides: {
      root: ({ theme }) => ({
        textDecoration: "none",
        fontSize: "15px",
        color: theme.palette.text.link,
        "&:hover": {
          opacity: 0.48,
        },
      }),
    },
    variants: [],
  },
};
