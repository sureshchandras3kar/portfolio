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
          {/* Issue #11: Footer CTA diversity — multiple actions */}
          <div className={styles?.footerActions}>
            <a
              href={portfolioData?.social?.linkedin}
              target="_blank"
              rel="noopener noreferrer me"
              className={`${styles?.btn} ${styles?.btnPrimary}`}
            >
              Contact on LinkedIn
            </a>
            <a
              href={portfolioData?.social?.github}
              target="_blank"
              rel="noopener noreferrer me"
              className={`${styles?.btn} ${styles?.btnOutline}`}
            >
              GitHub
            </a>
          </div>
          <div className={styles?.footerLinks}>
            <a
              href="/documents/Suresh_Chandra_Sekar_Resume_FINAL_v16.pdf"
              download
              className={styles?.footerLink}
            >
              Download Resume
            </a>
            <a
              href={portfolioData?.social?.medium}
              target="_blank"
              rel="noopener noreferrer"
              className={styles?.footerLink}
            >
              Medium Blog
            </a>
            <a href="#contact" className={styles?.footerLink}>
              Contact
            </a>
          </div>
        </div>
        <p>
          Suresh Chandra Sekar · Senior Backend Engineer · <span>{currentYear ?? ''}</span>
        </p>
        <p className={styles?.footerSub}>{portfolioData?.footer?.tagline}</p>
      </div>
    </footer>
  );
}
