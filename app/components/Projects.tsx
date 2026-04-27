import { portfolioData } from '@/app/data/portfolio';
import styles from '@/app/styles/sections.module.css';

export default function Projects() {
  return (
    <section
      id="projects"
      className={`${styles.section} ${styles.sectionAlt}`}
      aria-labelledby="projects-heading"
    >
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>{portfolioData.projects.label}</p>
          <h2 className={styles.sectionTitle} id="projects-heading">
            {portfolioData.projects.title}
          </h2>
        </div>

        <div className={styles.projectsGrid}>
          {portfolioData.projects.items.map((project, index) => (
            <article key={index} className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <div
                  className={styles.projectTech}
                  role="list"
                  aria-label="Technologies used"
                >
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={styles.techTag}
                      role="listitem"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectOrg}>{project.org}</p>
              <ul className={styles.projectDesc}>
                {project.points.map((point, idx) => (
                  <li
                    key={idx}
                    dangerouslySetInnerHTML={{
                      __html: point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
                    }}
                  />
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
