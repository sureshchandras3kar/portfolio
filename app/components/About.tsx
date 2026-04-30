import Image from 'next/image';
import { portfolioData } from '@/app/data/portfolio';
import styles from '@/app/styles/sections.module.css';

export default function About() {
  return (
    <section
      id="about"
      className={styles?.section}
      aria-labelledby="about-heading"
    >
      <div className={styles?.container}>
        <div className={styles?.sectionHeader}>
          <p className={styles?.sectionLabel}>{portfolioData?.about?.label}</p>
          <h2 className={styles?.sectionTitle} id="about-heading">
            {portfolioData?.about?.title}
          </h2>
        </div>

        <div className={styles?.aboutGrid}>
          <div className={styles?.aboutPhoto}>
            {/* Issue #17: photoFrame now has cyan border/glow accent via CSS */}
            <div className={styles?.photoFrame}>
              <Image
                src={portfolioData?.about?.image}
                alt="Suresh Chandra Sekar, Senior Backend Engineer based in Chennai, India"
                width={800}
                height={1198}
                priority
                className={styles?.profileImg}
              />
            </div>
          </div>

          <div className={styles?.aboutDetails}>
            <p
              className={styles?.aboutSummary}
              dangerouslySetInnerHTML={{
                __html: portfolioData?.about?.summary?.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
              }}
            />

            {/* Issue #18: detailGrid last item spans full width when alone (via CSS) */}
            <div className={styles?.detailGrid}>
              {portfolioData?.about?.details?.map((detail) => (
                <div key={detail?.label} className={styles?.detailItem}>
                  <span className={styles?.detailLabel}>{detail?.label}</span>
                  <span className={styles?.detailValue}>{detail?.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
