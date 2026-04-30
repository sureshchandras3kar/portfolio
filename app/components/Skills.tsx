import { portfolioData } from '@/app/data/portfolio';
import styles from '@/app/styles/sections.module.css';

/* Issue #4: Core groups (first 3) get elevated visual treatment */
const CORE_GROUP_COUNT = 3;

export default function Skills() {
  return (
    <section
      id="skills"
      className={`${styles?.section} ${styles?.sectionAlt}`}
      aria-labelledby="skills-heading"
    >
      <div className={styles?.container}>
        <div className={styles?.sectionHeader}>
          <p className={styles?.sectionLabel}>{portfolioData?.skills?.label}</p>
          <h2 className={styles?.sectionTitle} id="skills-heading">
            {portfolioData?.skills?.title}
          </h2>
        </div>

        <div className={styles?.skillsGrid}>
          {portfolioData?.skills?.groups?.map((group, groupIndex) => {
            const isCore = groupIndex < CORE_GROUP_COUNT;
            return (
              <div
                key={group?.title}
                className={`${styles?.skillGroup} ${isCore ? styles?.skillGroupCore : styles?.skillGroupSupporting}`}
              >
                <h3 className={isCore ? styles?.skillGroupCoreTitle : styles?.skillGroupTitle}>
                  {group?.title}
                </h3>
                <div className={styles?.skillTags} role="list">
                  {group?.tags?.map((tag) => (
                    <span
                      key={tag?.label}
                      className={`${styles?.skillTag} ${
                        tag?.primary ? styles?.skillTagPrimary : styles?.skillTagDim
                      }`}
                      role="listitem"
                    >
                      {tag?.label}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
