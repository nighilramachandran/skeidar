import { Components, Theme } from "@mui/material/styles";

export const paperOverride: Components<Theme> = {
  MuiPaper: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundImage: "none",
        padding: theme.spacing(2),
        background: theme.palette.background.paper,
        [theme.breakpoints.down("md")]: {
          padding: theme.spacing(1),
        },
      }),
    },
  },
};
