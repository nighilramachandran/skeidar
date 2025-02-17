import { Components, Theme } from "@mui/material/styles";

export const tapOverride: Components<Theme> = {
  MuiTab: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.text.primary,
        "& .MuiTouchRipple-root": {
          opacity: "0",
        },
      }),
    },
  },
};
