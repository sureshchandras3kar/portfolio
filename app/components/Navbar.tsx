'use client';

import { useState, useEffect } from 'react';
import { portfolioData } from '@/app/data/portfolio';
import styles from '../styles/navbar.module.css';

const NAV_SECTIONS = portfolioData?.nav?.filter((item) => item?.href !== '#blog')?.map((item) => item?.href?.replace('#', ''));

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const scrollY = window.scrollY + 100;
      let current = 'hero';
      for (const id of NAV_SECTIONS) {
        const el = document.getElementById(id);
        if (el && el?.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileOpen(false);
  };

  const filteredNav = portfolioData?.nav?.filter((item) => item?.href !== '#blog');

  return (
    <nav
      className={`${styles?.navbar} ${isScrolled ? styles?.scrolled : ''}`}
      aria-label="Main navigation"
    >
      <div className={styles?.navInner}>
        <a
          href="#hero"
          className={styles?.navLogo}
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
          <span className={styles?.navLogoText}>suresh_</span>
        </a>

        <button
          className={`${styles?.navHamburger} ${isMobileOpen ? styles?.open : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul
          className={`${styles?.navLinks} ${isMobileOpen ? styles?.open : ''}`}
          role="list"
        >
          {filteredNav?.map((item) => {
            const sectionId = item?.href?.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <li key={item?.href}>
                <a
                  href={item?.href}
                  onClick={handleNavClick}
                  className={isActive ? styles?.active : ''}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {item?.label}
                </a>
              </li>
            );
          })}
        </ul>

        <span className={styles?.navIndicator} aria-hidden="true"></span>
      </div>
    </nav>
  );
}
