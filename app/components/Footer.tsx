'use client';

import { useState, useEffect } from 'react';
import { portfolioData } from '@/app/data/portfolio';
import styles from '@/app/styles/sections.module.css';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date()?.getFullYear());
  }, []);

  return (
    <footer id="footer" className={styles?.footer}>
      <div className={styles?.footerContent}>
        <div className={styles?.footerCta}>
          <p className={styles?.footerMessage}>{portfolioData?.footer?.message}</p>
          <a
            href={portfolioData?.social?.linkedin}
            target="_blank"
            rel="noopener noreferrer me"
            className={`${styles?.btn} ${styles?.btnPrimary}`}
          >
            Contact on LinkedIn
          </a>
        </div>
        <p>
          Suresh Chandra Sekar · Senior Backend Engineer · <span>{currentYear ?? ''}</span>
        </p>
        <p className={styles?.footerSub}>{portfolioData?.footer?.tagline}</p>
      </div>
    </footer>
  );
}
