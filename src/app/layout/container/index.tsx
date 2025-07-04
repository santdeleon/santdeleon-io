import { type ReactNode } from "react";
import styles from "./index.module.css";

// =============================================================================
// Constants
// =============================================================================

const Container = ({ children }: { children: ReactNode }) => (
  <div className={styles.container}>{children}</div>
);

export default Container;
