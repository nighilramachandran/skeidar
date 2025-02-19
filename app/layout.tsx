import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import type { Metadata } from "next";
import Navbar from "./Navbar";
import theme from "./styles/theme/theme";
import LanguageProviders from "./providers/LanguageProviders";
import Footer from "./Footer";
import "./global.css";

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
    <html lang={"no"}>
      <body>
        <StyledEngineProvider injectFirst>
          <LanguageProviders>
            <ThemeProvider theme={theme}>
              <CssBaseline enableColorScheme />
              <Navbar />
              <main style={{ minHeight: "80vh" }}>{children}</main>
              <footer>
                <Footer />
              </footer>
            </ThemeProvider>
          </LanguageProviders>
        </StyledEngineProvider>
      </body>
    </html>
  );
}
