import { type Metadata } from "next";
import Image from "next/image";
import localFont from "next/font/local";
import { type ReactNode } from "react";
import { Divider } from "./components";
import {
  RainbowDivider,
  Container,
  Texture,
  Providers,
  Navbar,
  Footer,
} from "./layout/index";
import styles from "./layout/index.module.css";
import "./layout/globals.css";
import "./layout/tokens.css";
import Liquid from "./liquid-watering-plant.svg";

// =============================================================================
// Constants
// =============================================================================

const Calibre = localFont({
  variable: "--font-calibre",
  src: [
    {
      path: "./assets/fonts/calibre/calibre-thin-italic.otf",
      style: "italic",
      weight: "200",
    },
    {
      path: "./assets/fonts/calibre/calibre-thin.otf",
      style: "normal",
      weight: "200",
    },
    {
      path: "./assets/fonts/calibre/calibre-light-italic.otf",
      style: "italic",
      weight: "300",
    },
    {
      path: "./assets/fonts/calibre/calibre-light.otf",
      style: "normal",
      weight: "300",
    },
    {
      path: "./assets/fonts/calibre/calibre-regular-italic.otf",
      style: "italic",
      weight: "400",
    },
    {
      path: "./assets/fonts/calibre/calibre-regular.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./assets/fonts/calibre/calibre-medium-italic.otf",
      style: "italic",
      weight: "500",
    },
    {
      path: "./assets/fonts/calibre/calibre-medium.otf",
      style: "normal",
      weight: "500",
    },
    {
      path: "./assets/fonts/calibre/calibre-semibold-italic.otf",
      style: "italic",
      weight: "600",
    },
    {
      path: "./assets/fonts/calibre/calibre-semibold.otf",
      style: "normal",
      weight: "600",
    },
    {
      path: "./assets/fonts/calibre/calibre-bold-italic.otf",
      style: "italic",
      weight: "700",
    },
    {
      path: "./assets/fonts/calibre/calibre-bold.otf",
      style: "normal",
      weight: "700",
    },
    {
      path: "./assets/fonts/calibre/calibre-black-italic.otf",
      style: "italic",
      weight: "800",
    },
    {
      path: "./assets/fonts/calibre/calibre-black.otf",
      style: "normal",
      weight: "800",
    },
  ],
});
export const metadata: Metadata = {
  title: "Sant | Software Engineer",
  description: "Personal developer portfolio for Sant Deleon.",
};

// =============================================================================
// Main Component
// =============================================================================

const Layout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="en" suppressHydrationWarning>
    <head />
    <body className={Calibre.className}>
      <Providers>
        <Texture />
        <RainbowDivider />
        <Container>
          <Navbar />
          <Divider />
          <main>{children}</main>
          <div className={styles.dividerContainer}>
            <div className={styles.imageContainer}>
              <Image src={Liquid} alt="Liquid" className={styles.liquid} />
            </div>
            <Divider className={styles.divider} />
          </div>
          <Footer />
        </Container>
      </Providers>
    </body>
  </html>
);

export default Layout;
