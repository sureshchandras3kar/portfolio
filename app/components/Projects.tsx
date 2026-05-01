import { portfolioData } from '@/app/data/portfolio';
import styles from '@/app/styles/sections.module.css';

export default function Projects() {
  return (
    <section
      id="projects"
      className={`${styles?.section} ${styles?.sectionAlt}`}
      aria-labelledby="projects-heading"
    >
      <div className={styles?.container}>
        <div className={styles?.sectionHeader}>
          <p className={styles?.sectionLabel}>{portfolioData?.projects?.label}</p>
          <h2 className={styles?.sectionTitle} id="projects-heading">
            {portfolioData?.projects?.title}
          </h2>
        </div>

        <div className={styles?.projectsGrid}>
          {portfolioData?.projects?.items?.map((project, index) => (
            <article key={index} className={styles?.projectCard}>
              {/* Issue #6: Title → Org → Tech tags → Description (conventional reading order) */}
              <h3 className={styles?.projectTitle}>{project?.title}</h3>
              <p className={styles?.projectOrg}>{project?.org}</p>
              <div
                className={styles?.projectTech}
                role="list"
                aria-label="Technologies used"
              >
                {project?.tech?.map((tech) => (
                  <span
                    key={tech}
                    className={styles?.techTag}
                    role="listitem"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className={styles?.projectDesc}>
                {project?.points?.map((point, idx) => (
                  <li
                    key={idx}
                    dangerouslySetInnerHTML={{
                      __html: point?.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
                    }}
                  />
                ))}
              </ul>
              {/* Issue #5: Visual CTA affordance */}
              <span className={styles?.projectCta} aria-hidden="true">
                Read case study
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
