import styles from "./index.module.css";
import Header from "./header";
import About from "./about";
import Work from "./work";

// =============================================================================
// Main Component
// =============================================================================

const Home = () => (
  <div className={styles.column}>
    <section className={styles.section}>
      <Header />
    </section>
    <div className={styles.row}>
      {Array(17)
        .fill(null)
        .map((n, i) => (
          <span key={i}>◆</span>
        ))}
    </div>
    <section className={styles.section}>
      <About />
    </section>
    <section className={styles.section}>
      <Work />
    </section>
  </div>
);

export default Home;
