"use client";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import styles from "./index.module.css";

// =============================================================================
// Constants
// =============================================================================

const HELLO = ["H", "e", "l", "l", "o", ","];

const PHRASES = [
  "Cypherpunk",
  "Coffee Whore",
  "Bookworm",
  "Musician",
  "Extrovert",
  "Capitalist",
  "Designer",
  "Neanderthal",
  "Stargazer",
  "Pianist",
  "Romantic",
  "Meanie",
  "Blob",
  "Sunbather",
  "Guitarist",
  "Motorcyclist",
];

const [FIRST_PHRASE] = PHRASES;

// =============================================================================
// Utils
// =============================================================================

const getNextPhrase = (currentPhrase: string): string => {
  const nextIndex = PHRASES.indexOf(currentPhrase) + 1;
  return nextIndex >= PHRASES.length - 1 ? FIRST_PHRASE : PHRASES[nextIndex];
};

// =============================================================================
// Main Component
// =============================================================================

const Header = () => {
  const [phrase, setPhrase] = useState(FIRST_PHRASE);

  const changePhrase = useCallback(
    () => setPhrase(getNextPhrase(phrase)),
    [phrase]
  );

  // pull random phrase from phrases every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => changePhrase(), 3000);
    return () => clearInterval(interval);
  }, [changePhrase]);

  return (
    <header>
      <div className={styles.column}>
        <h1 className={styles.title}>
          <span className={styles.rainbowText}>
            {HELLO.map((letter, i) => (
              <span key={`hello-${letter}-${i}`}>
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  style={{ display: "inline-block" }}
                >
                  {letter}
                </motion.div>
              </span>
            ))}
          </span>{" "}
          I&apos;m Sant
          <br /> Software Engineer &{" "}
          <button className={styles.phrase} onClick={changePhrase}>
            {[...phrase].map((letter, i) => (
              <motion.div
                key={`phrase-${letter}-${i}`}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.5 }}
                // if phrase includes a space character give it margin
                style={{
                  marginLeft:
                    letter.charCodeAt(0) === 32 ? "0.5rem" : undefined,
                }}
              >
                {letter}
              </motion.div>
            ))}
          </button>
        </h1>
        <h3 className={styles.subtitle}>
          with a knack for creating cutting edge products with elegance and
          style{" "}
        </h3>
      </div>
    </header>
  );
};

export default Header;
