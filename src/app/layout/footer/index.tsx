import styles from "./index.module.css";

// =============================================================================
// Main Component
// =============================================================================

const Footer = () => (
  <footer>
    <div className={styles.row}>
      <p className={styles.p}>
        Made with
        <span className={styles.emoji} role="img" aria-label="Coffee Cup Emoji">
          ☕️
        </span>{" "}
        by Sant
      </p>
      <div className={styles.row}>
        <p className={styles.p}>
          <span>contact:</span>{" "}
          <a
            className={styles.link}
            href="mailto:sant@santdeleon.io"
            rel="noopener noreferrer"
          >
            sant@santdeleon.io
          </a>
        </p>
        <div className={styles.divider}>/</div>
        <p className={styles.p}>
          <span>github:</span>{" "}
          <a
            className={styles.link}
            href="https://github.com/santdeleon"
            rel="noopener noreferrer"
            target="_blank"
          >
            santdeleon
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
