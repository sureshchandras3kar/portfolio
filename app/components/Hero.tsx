'use client';

import { useState, useEffect, useRef } from 'react';
import { portfolioData } from '@/app/data/portfolio';
import styles from '@/app/styles/sections.module.css';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const phraseIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    const phrases = portfolioData?.hero?.typedPhrases;

    const timerRef = { current: null as ReturnType<typeof setTimeout> | null };

    const tick = () => {
      const phrase = phrases?.[phraseIndexRef?.current];
      const isDeleting = isDeletingRef?.current;
      const charIndex = charIndexRef?.current;

      if (!isDeleting && charIndex < phrase?.length) {
        charIndexRef.current = charIndex + 1;
        setTypedText(phrase?.slice(0, charIndexRef?.current));
        timerRef.current = setTimeout(tick, 60);
      } else if (!isDeleting && charIndex === phrase?.length) {
        timerRef.current = setTimeout(() => {
          isDeletingRef.current = true;
          tick();
        }, 2000);
      } else if (isDeleting && charIndex > 0) {
        charIndexRef.current = charIndex - 1;
        setTypedText(phrase?.slice(0, charIndexRef?.current));
        timerRef.current = setTimeout(tick, 40);
      } else if (isDeleting && charIndex === 0) {
        isDeletingRef.current = false;
        phraseIndexRef.current = (phraseIndexRef?.current + 1) % phrases?.length;
        timerRef.current = setTimeout(tick, 300);
      }
    };

    timerRef.current = setTimeout(tick, 500);
    return () => clearTimeout(timerRef?.current);
  }, []);

  return (
    <section id="hero" className={styles?.heroSection} aria-label="Introduction">
      <div className={styles?.heroAmbient} aria-hidden="true">
        <span className={`${styles?.heroOrb} ${styles?.orbOne}`}></span>
        <span className={`${styles?.heroOrb} ${styles?.orbTwo}`}></span>
        <span className={`${styles?.heroOrb} ${styles?.orbThree}`}></span>
      </div>
      <div className={styles?.heroContent}>
        <p className={`${styles?.heroLabel} ${styles?.animateFadeUp}`}>
          {portfolioData?.hero?.label}
        </p>

        <h1 className={`${styles?.heroName} ${styles?.animateFadeUp}`}>
          {portfolioData?.hero?.name}
        </h1>

        <p className={`${styles?.heroIntro} ${styles?.animateFadeUp}`}>
          {portfolioData?.hero?.intro}
        </p>

        {/* Issue #2: Added prefix label before typed text */}
        <p className={`${styles?.heroTagline} ${styles?.animateFadeUp}`}>
          <span className={styles?.heroTaglinePrefix} aria-hidden="true">→</span>
          <span
            id="typed-text"
            role="status"
            aria-live="polite"
            aria-atomic="true"
            aria-label={typedText ? `I specialize in: ${typedText}` : 'Specialization loading'}
          >
            {typedText}
          </span>
          <span className={styles?.cursor} aria-hidden="true">|</span>
        </p>

        <div
          className={`${styles?.heroProof} ${styles?.animateFadeUp}`}
          role="list"
          aria-label="Key highlights"
        >
          {portfolioData?.hero?.highlights?.map((item) => (
            <span key={item} className={styles?.heroProofItem} role="listitem">
              {item}
            </span>
          ))}
        </div>

        <p className={`${styles?.heroSub} ${styles?.animateFadeUp}`}>
          {portfolioData?.hero?.cta}
        </p>

        <div className={`${styles?.heroActions} ${styles?.animateFadeUp}`}>
          <a
            href="/documents/Suresh_Chandra_Sekar_Resume_FINAL_v16.pdf"
            download
            className={`${styles?.btn} ${styles?.btnPrimary} ${styles?.btnResume}`}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
          <a
            href={portfolioData?.social?.linkedin}
            target="_blank"
            rel="noopener noreferrer me"
            className={`${styles?.btn} ${styles?.btnOutline}`}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            Contact on LinkedIn
          </a>
          <div className={styles?.heroLinks}>
            <a href="#experience" className={styles?.heroLink}>
              View Experience
            </a>
            <span className={styles?.heroLinkSep}>·</span>
            <a
              href={portfolioData?.social?.github}
              target="_blank"
              rel="noopener noreferrer me"
              className={styles?.heroLink}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <a href="#about" className={styles?.scrollCue} aria-label="Scroll down to About section">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  );
}
