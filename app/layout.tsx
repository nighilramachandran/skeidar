import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import type { Metadata } from "next";
import Footer from "./Footer";
import "./global.css";
import Navbar from "./Navbar";
import LanguageProviders from "./providers/LanguageProviders";
import theme from "./styles/theme/theme";
import MotionLazyContainer from "./components/animate/MotionLazyContainer";

export const metadata: Metadata = {
  title: "Skeidar | Home Appliances",
  description:
    "Discover a wide range of premium home appliances at Skeidar. Shop high-quality kitchen, living, and household essentials with great deals.",
  icons: {
    icon: "/favicon.png",
  },
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
          <MotionLazyContainer>
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
          </MotionLazyContainer>
        </StyledEngineProvider>
      </body>
    </html>
  );
}
