import { portfolioData } from '@/app/data/portfolio';
import styles from '@/app/styles/sections.module.css';

interface ContactItem {
  label: string;
  value: string;
  icon: string;
  static?: boolean;
  href?: string;
  download?: boolean;
}

function renderContactIcon(iconType: string) {
  const iconMap: Record<string, React.ReactNode> = {
    phone: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
      </svg>
    ),
    mail: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    linkedin: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    github: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.547 2.914 1.186.092-.924.35-1.546.636-1.903-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
    blog: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
    location: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    download: (
      <svg
        width="20"
        height="20"
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
    ),
  };

  return iconMap[iconType] || null;
}

export default function Contact() {
  return (
    <section
      id="contact"
      className={`${styles.section} ${styles.sectionAlt}`}
      aria-labelledby="contact-heading"
    >
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>{portfolioData.contact.label}</p>
          <h2 className={styles.sectionTitle} id="contact-heading">
            {portfolioData.contact.title}
          </h2>
          <div className={styles.contactAvailability}>
            <span className={styles.availDot}></span>
            <span>{portfolioData.contact.availability}</span>
          </div>
        </div>

        <div className={styles.contactCard}>
          <div className={styles.contactRow}>
            {portfolioData.contact.items.map((item: ContactItem) => {
              const commonContent = (
                <>
                  <div className={styles.contactIcon}>
                    {renderContactIcon(item.icon)}
                  </div>
                  <div>
                    <p className={styles.contactLabel}>{item.label}</p>
                    <p className={styles.contactValue}>{item.value}</p>
                  </div>
                </>
              );

              if (item.static) {
                return (
                  <div
                    key={item.label}
                    className={`${styles.contactItem} ${styles.contactItemStatic}`}
                  >
                    {commonContent}
                  </div>
                );
              }

              if (item.href) {
                if (item.download) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      download
                      className={styles.contactItem}
                    >
                      {commonContent}
                    </a>
                  );
                }

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className={styles.contactItem}
                  >
                    {commonContent}
                  </a>
                );
              }

              return (
                <div key={item.label} className={styles.contactItem}>
                  {commonContent}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
