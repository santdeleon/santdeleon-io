import styles from "./index.module.css";

// =============================================================================
// Main Component
// =============================================================================

const Divider = ({ className }: { className?: string }) => {
  return <div className={`${className} ${styles.divider}`} />;
};

export default Divider;
