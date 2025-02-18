import { Components, Theme } from "@mui/material/styles";

export const badgeOverride: Components<Theme> = {
  MuiBadge: {
    styleOverrides: {
      root: ({ theme }) => ({
        "& .MuiBadge-badge": {
          background: theme.palette.text.link,
        },
      }),
    },
  },
};
