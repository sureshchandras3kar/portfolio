import { portfolioData } from '@/app/data/portfolio';
import styles from '@/app/styles/sections.module.css';

export default function Education() {
  return (
    <section
      id="education"
      className={styles?.section}
      aria-labelledby="education-heading"
    >
      <div className={styles?.container}>
        <div className={styles?.sectionHeader}>
          <p className={styles?.sectionLabel}>
            {portfolioData?.education?.label}
          </p>
          <h2 className={styles?.sectionTitle} id="education-heading">
            {portfolioData?.education?.title}
          </h2>
        </div>

        {/* Issue #14: Degree card constrained to max-width via CSS, not full-width */}
        <div className={styles?.eduGrid}>
          <div className={styles?.eduCard}>
            <div className={styles?.eduContent}>
              <h3>{portfolioData?.education?.degree?.title}</h3>
              <p className={styles?.eduInstitution}>
                {portfolioData?.education?.degree?.institution}
              </p>
              <p className={styles?.eduMeta}>
                {portfolioData?.education?.degree?.period} · CGPA:{' '}
                {portfolioData?.education?.degree?.cgpa}
              </p>
            </div>
          </div>
        </div>

        <h3 className={styles?.certsHeading}>Selected Learning</h3>
        {/* Issue #15: Certifications as card-style grid layout */}
        <div className={styles?.certsGrid} role="list">
          {portfolioData?.education?.certifications?.map((cert, index) => (
            <div
              key={index}
              className={styles?.certCard}
              role="listitem"
            >
              <div className={styles?.certDot} aria-hidden="true"></div>
              <div className={styles?.certContent}>
                <p className={styles?.certName}>{cert?.name}</p>
                <p className={styles?.certIssuer}>{cert?.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
