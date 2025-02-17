import { CssBaseline, ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import theme from "./styles/theme/theme";
import Navbar from "./Navbar";

export const metadata: Metadata = {
  title: "Skeidar | Home Appliances",
  description:
    "Discover a wide range of premium home appliances at Skeidar. Shop high-quality kitchen, living, and household essentials with great deals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <body>
          <Navbar />
          <main>{children}</main>
        </body>
      </ThemeProvider>
    </html>
  );
}
