import { portfolioData } from '@/app/data/portfolio';
import styles from '@/app/styles/sections.module.css';

export default function Experience() {
  return (
    <section
      id="experience"
      className={styles.section}
      aria-labelledby="experience-heading"
    >
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>{portfolioData.experience.label}</p>
          <h2 className={styles.sectionTitle} id="experience-heading">
            {portfolioData.experience.title}
          </h2>
        </div>

        <div className={styles.timeline} role="list">
          <div className={styles.timelineProgress} aria-hidden="true"></div>

          {portfolioData.experience.items.map((item, index) => (
            <article
              key={index}
              className={styles.timelineItem}
              role="listitem"
            >
              <div className={styles.timelineDot} aria-hidden="true"></div>
              <div className={styles.timelineCard}>
                <div className={styles.timelineMeta}>
                  <span className={styles.timelinePeriod}>{item.period}</span>
                  {item.badge && (
                    <span className={styles.timelineBadge}>{item.badge}</span>
                  )}
                </div>
                <h3 className={styles.timelineRole}>{item.role}</h3>
                <p className={styles.timelineCompany}>{item.company}</p>
                <p className={styles.timelineSummary}>{item.summary}</p>
                <ul
                  className={styles.timelineBullets}
                  aria-label="Responsibilities and achievements"
                >
                  {item.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      dangerouslySetInnerHTML={{
                        __html: achievement.replace(
                          /\*\*(.*?)\*\*/g,
                          '<strong>$1</strong>'
                        ),
                      }}
                    />
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
