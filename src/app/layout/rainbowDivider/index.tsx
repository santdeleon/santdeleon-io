import styles from "./index.module.css";

const RainbowDivider = () => (
  <div className={styles.divider}>
    {Array(7)
      .fill(null)
      .map((n, i) => (
        <div key={i} className={styles.block} />
      ))}
  </div>
);

export default RainbowDivider;
