import { portfolioData } from '@/app/data/portfolio';
import styles from '@/app/styles/sections.module.css';

export default function Skills() {
  return (
    <section
      id="skills"
      className={`${styles.section} ${styles.sectionAlt}`}
      aria-labelledby="skills-heading"
    >
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>{portfolioData.skills.label}</p>
          <h2 className={styles.sectionTitle} id="skills-heading">
            {portfolioData.skills.title}
          </h2>
        </div>

        <div className={styles.skillsGrid}>
          {portfolioData.skills.groups.map((group) => (
            <div key={group.title} className={styles.skillGroup}>
              <h3 className={styles.skillGroupTitle}>{group.title}</h3>
              <div className={styles.skillTags} role="list">
                {group.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`${styles.skillTag} ${
                      tag.primary ? styles.skillTagPrimary : styles.skillTagDim
                    }`}
                    role="listitem"
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
