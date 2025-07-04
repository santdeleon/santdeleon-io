"use client";

import styles from "./index.module.css";
import Sant from "./avatar-sant.svg";
import Moon from "./sprite-moon.svg";
import Sun from "./sprite-sun.svg";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

// =============================================================================
// Main Component
// =============================================================================

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDarkTheme = resolvedTheme === "dark";
  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  // prevent SSR mismatch due to theme injection
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className={styles.nav}>
      <div className={styles.brandContainer}>
        <Image className={styles.brand} src={Sant} alt="Sant Deleon" priority />
      </div>
      <button
        className={styles.button}
        onClick={toggleTheme}
        title={`Activate ${isDarkTheme ? "light" : "dark"} mode`}
      >
        <Image
          className={styles.img}
          src={isDarkTheme ? Moon : Sun}
          alt={isDarkTheme ? "Moon" : "Sun"}
          priority
        />
      </button>
    </nav>
  );
};

export default Navbar;
