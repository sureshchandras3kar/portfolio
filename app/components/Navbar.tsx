'use client';

import { useState, useEffect } from 'react';
import { portfolioData } from '@/app/data/portfolio';
import styles from '@/app/styles/navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <nav
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      aria-label="Main navigation"
    >
      <div className={styles.navInner}>
        <a
          href="#hero"
          className={styles.navLogo}
          aria-label="Suresh Chandra Sekar — back to top"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" y1="19" x2="20" y2="19"></line>
          </svg>
          <span className={styles.navLogoText}>suresh_</span>
        </a>

        <button
          className={styles.navHamburger}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul
          className={`${styles.navLinks} ${isMobileOpen ? styles.open : ''}`}
          role="list"
        >
          {portfolioData.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={handleNavClick}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <span className={styles.navIndicator} aria-hidden="true"></span>
      </div>
    </nav>
  );
}
