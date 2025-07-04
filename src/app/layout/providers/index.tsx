// "use client";

import { ThemeProvider } from "next-themes";
import { type ReactNode } from "react";

// =============================================================================
// Main Component
// =============================================================================

const Providers = ({ children }: { children: ReactNode }) => (
  <ThemeProvider
    attribute={["data-theme", "class"]}
    defaultTheme="system"
    enableSystem={true}
    disableTransitionOnChange
  >
    {children}
  </ThemeProvider>
);

export default Providers;
