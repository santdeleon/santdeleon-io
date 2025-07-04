import React from "react";
import BrandAmoeba from "./brand-amoeba.svg";
import BrandHostgator from "./brand-hostgator.svg";
import BrandPhantom from "./brand-phantom.svg";
import styles from "./index.module.css";
import Image from "next/image";
import Button from "@/app/components/button";

// =============================================================================
// Constants
// =============================================================================

const CARDS: {
  id: number;
  category: string;
  description: string;
  name: string;
  role: string;
  svg: string;
  timeframe: string;
  url?: string | undefined;
}[] = [
  {
    id: 0,
    category: "Blockchain & Crypto",
    description: "Crypto wallet and side project",
    name: "Amoeba",
    role: "Creator",
    svg: BrandAmoeba,
    timeframe: "Current",
    url: undefined,
  },
  {
    id: 1,
    category: "Blockchain & Crypto",
    description: "The world's most popular crypto wallet",
    name: "Phantom",
    role: "Founding Engineer",
    svg: BrandPhantom,
    timeframe: "June 2021 - Aug 2023",
    url: "https://phantom.com",
  },
  {
    id: 2,
    category: "Domain & Web Hosting",
    description: "OG domain and web hosting platform",
    name: "HostGator",
    role: "Software Engineer",
    svg: BrandHostgator,
    timeframe: "April 2019 - May 2021",
    url: "https://hostgator.com",
  },
];

// -----------------------------------------------------------------------------

const Work = () => (
  <div className={styles.grid}>
    {CARDS.map(
      (
        { id, category, description, name, role, svg, timeframe, url },
        idx: number
      ) => (
        <div key={`${id}-${idx}`} className={styles.gridItem}>
          <div className={styles.card}>
            {/* Top */}
            <Image
              className={styles.cardImage}
              src={svg}
              alt={`${name} Brand Logo`}
            />
            {/* Middle-Top */}
            <div className={styles.column}>
              <h4 className={styles.cardTitle}>{category}</h4>
              <div className={styles.row}>
                <h5 className={styles.cardSubtitle}>{role}</h5>
                <h5 className={styles.cardSubtitle}>{timeframe}</h5>
              </div>
            </div>
            {/* Middle-Bottom */}
            <p className={styles.cardDescription}>{description}</p>
            {/* Bottom */}
            <a href={url} rel="noopener noreferrer" target="_blank">
              <Button disabled={!url} kind="outline" size="md">
                Visit Site
              </Button>
            </a>
          </div>
        </div>
      )
    )}
  </div>
);

export default Work;
