'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Placeholder hooks (to be implemented separately)
const useScrollReveal = () => {
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (el: HTMLElement | null) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };
};

const useNavIndicator = () => {
  const [activeSection, setActiveSection] = useState('');
  const indicatorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const updateIndicator = () => {
      const sections = ['about', 'skills', 'experience', 'projects', 'blog', 'education', 'contact'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', updateIndicator);
    return () => window.removeEventListener('scroll', updateIndicator);
  }, []);

  return { activeSection, indicatorRef };
};

const useMediumFeed = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        // Medium API fetch will be implemented separately
      } catch (error) {
        console.error('Error fetching Medium articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return { articles, loading };
};

const useTypedText = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullTexts = ['Python', 'REST APIs', 'Cloud Engineering'];
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const fullText = fullTexts[index % fullTexts.length];
      if (charIndex < fullText.length) {
        setDisplayedText((prev) => prev + fullText[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setDisplayedText('');
          setCharIndex(0);
          setIndex((prev) => prev + 1);
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [charIndex, index]);

  return displayedText;
};

const useScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { isVisible, scrollToTop };
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const revealRef = useScrollReveal();
  const { activeSection, indicatorRef } = useNavIndicator();
  const { articles, loading } = useMediumFeed();
  const typedText = useTypedText();
  const { isVisible, scrollToTop } = useScrollToTop();

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const skills = [
    {
      category: 'Languages & Frameworks',
      primary: ['Python (Advanced)', 'Flask', 'FastAPI', 'pytest'],
      secondary: ['Pydantic', 'MSAL', 'Pandas', 'Go (Basic)', 'Rust (Basic)'],
    },
    {
      category: 'Backend Engineering',
      primary: ['REST API Design', 'Event-Driven Systems', 'Performance Profiling', 'Memory Optimisation'],
      secondary: ['Background Job Processing', 'In-memory Caching'],
    },
    {
      category: 'Cloud SDKs',
      primary: ['AWS (Boto3)', 'Azure REST API', 'GCP (google-api-python-client)'],
      secondary: ['OCI'],
    },
    {
      category: 'API & Messaging',
      primary: [],
      secondary: ['Swagger / OpenAPI', 'gRPC', 'RabbitMQ', 'AWS SQS', 'JWT', 'RBAC'],
    },
    {
      category: 'Infrastructure & Databases',
      primary: ['MongoDB'],
      secondary: ['Docker', 'Terraform (Intermediate)', 'ARM Templates', 'CloudFormation', 'Linux'],
    },
    {
      category: 'DevOps, Testing & Tools',
      primary: ['Git', 'Jenkins'],
      secondary: ['ServiceNow CMDB', 'Zabbix', 'Docker SDK'],
    },
  ];

  const timeline = [
    {
      period: 'Apr 2024 – Present',
      badge: 'Current',
      role: 'Senior Backend Engineer',
      company: 'Enterprise cloud platform product work · Chennai, India',
      summary:
        'Led backend platform work across FinOps, pricing intelligence, performance optimization, and API delivery for large-scale multi-cloud products.',
      highlights: [
        'Delivered <strong>100+ REST API features</strong> for cloud governance products used across <strong>1,000+ cloud accounts</strong>.',
        'Designed and built FinOps ingestion pipelines across <strong>15+ SaaS providers</strong>, expanding billing intelligence coverage for enterprise clients.',
        'Optimized cost-processing performance and memory efficiency, resolving production incidents tied to large-scale SaaS spend.',
        'Led a budgeting engine redesign with better alerting, multi-dimensional policies, and stronger spend forecasting.',
        'Architected a real-time pricing engine for multi-cloud provisioning workflows and pre-deployment cost visibility.',
        'Mentored 2 junior engineers through code reviews, pairing, and backend/API design guidance.',
      ],
    },
    {
      period: 'Mar 2019 – Apr 2024',
      badge: '',
      role: 'Backend Engineer',
      company: 'Multi-cloud platform systems work · Chennai, India',
      summary:
        'Built foundational backend systems for cloud discovery, automation, observability, and asynchronous job processing across multi-cloud integrations.',
      highlights: [
        'Migrated daemon- and thread-based services into a centralized background job framework secured with JWT authentication.',
        'Introduced Pydantic models and stronger typing across owned modules to improve reliability and development consistency.',
        'Built utilization metrics support for <strong>30+ cloud services</strong> through an event-driven discovery pipeline using AWS SQS.',
        'Expanded observability with CloudWatch alarm templates, Zabbix, and custom CWAgent metrics for EC2 instances.',
        'Integrated AWS SSM, ARM, CloudFormation, ServiceNow CMDB, and RabbitMQ for secure automation and ITSM workflows.',
        'Developed cloud provisioning workflows and Mistral templates, deepening multi-cloud IaC capabilities across the platform.',
      ],
    },
  ];

  const projects = [
    {
      title: 'Case Study 01: Real-Time Multi-Cloud Pricing API',
      tech: ['Python', 'FastAPI', 'REST APIs'],
      org: 'A platform backend case study showing how I design APIs that help teams estimate infrastructure cost before provisioning.',
      points: [
        '<strong>Problem:</strong> Enterprise teams needed real-time multi-cloud cost visibility before provisioning.',
        '<strong>Solution:</strong> Built a real-time cost estimation API spanning AWS, Azure, GCP, and OCI with normalized pricing data across <strong>50+ SKU categories</strong>.',
        '<strong>Performance:</strong> Optimized the FastAPI endpoint to <strong>&lt;200ms p99 latency</strong> using Redis caching and async processing.',
        '<strong>Outcome:</strong> Reduced deployment cost uncertainty by <strong>40%</strong> for enterprise provisioning workflows.',
        '<strong>Validation:</strong> Achieved <strong>99.8% pricing accuracy</strong> across environments managing <strong>1,000+ cloud accounts</strong>.',
      ],
    },
    {
      title: 'Case Study 02: Multi-Provider Billing Intelligence Pipeline',
      tech: ['Python', 'Flask', 'MongoDB', 'ETL'],
      org: 'A backend data systems case study showing how I built resilient ingestion, reconciliation, and billing intelligence workflows.',
      points: [
        '<strong>Problem:</strong> Billing data across SaaS providers was fragmented, noisy, and slow to reconcile.',
        '<strong>Solution:</strong> Built <strong>15+ custom parsers</strong> across CSV, JSON, and Parquet formats for multi-provider billing ingestion.',
        '<strong>Data quality:</strong> Reduced duplicate invoice records from <strong>8,500+ monthly</strong> to <strong>&lt;50</strong> through idempotent MongoDB pipeline design.',
        '<strong>Performance:</strong> Cut billing reconciliation time from <strong>4 hours to 45 minutes</strong> through batching and async processing.',
        '<strong>Outcome:</strong> Maintained <strong>100% uptime</strong> for production ingestion serving <strong>1,000+ cloud-account environments</strong>.',
      ],
    },
  ];

  const certifications = [
    {
      name: 'Master Modern Software Architecture: Microservices & Event-Driven Architecture',
      issuer: 'Udemy · Feb 2025',
    },
    {
      name: 'Pragmatic System Design',
      issuer: 'Udemy · Feb 2025',
    },
    {
      name: 'Python Unit Testing Fundamentals (unittest & pytest)',
      issuer: 'Udemy · Feb 2025',
    },
  ];

  return (
    <>
      {/* ── NAV ── */}
      <nav id="navbar" aria-label="Main navigation" className="nav">
        <div className="nav-inner">
          <a href="#hero" className="nav-logo" aria-label="Suresh Chandra Sekar — back to top">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 17 10 11 4 5"></polyline>
              <line x1="12" y1="19" x2="20" y2="19"></line>
            </svg>
            <span className="nav-logo-text">suresh_</span>
          </a>
          <button
            className="nav-hamburger"
            id="nav-hamburger"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} id="nav-links" role="list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={() => setMobileMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <span className="nav-indicator" id="nav-indicator" ref={indicatorRef} aria-hidden="true"></span>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero" className="hero" aria-label="Introduction">
        <div className="hero-ambient" aria-hidden="true">
          <span className="hero-orb hero-orb--one"></span>
          <span className="hero-orb hero-orb--two"></span>
          <span className="hero-orb hero-orb--three"></span>
        </div>
        <div className="hero-content">
          <p className="hero-label animate-fade-up">Senior Backend Engineer</p>
          <h1 className="hero-name animate-fade-up">Suresh Chandra Sekar</h1>
          <p className="hero-intro animate-fade-up">
            Senior Backend Engineer with 7+ years of experience designing and owning Python API platforms, cloud integrations, and event-driven systems for enterprise-scale products.
          </p>
          <p className="hero-tagline animate-fade-up">
            <span id="typed-text" aria-label={`${typedText || 'Python · REST APIs · Cloud Engineering'}`}>
              {typedText}
            </span>
            <span className="cursor" aria-hidden="true">
              |
            </span>
          </p>
          <div className="hero-proof animate-fade-up" role="list" aria-label="Key highlights">
            <span className="hero-proof-item" role="listitem">
              7+ years
            </span>
            <span className="hero-proof-item" role="listitem">
              100+ API features
            </span>
            <span className="hero-proof-item" role="listitem">
              AWS + Azure + GCP
            </span>
            <span className="hero-proof-item" role="listitem">
              1,000+ cloud accounts
            </span>
          </div>
          <p className="hero-sub animate-fade-up">
            Open to senior backend, platform, and cloud engineering roles focused on API ownership, cloud platform work, and production reliability &middot; Chennai, India
          </p>
          <div className="hero-actions animate-fade-up">
            <a href="documents/Suresh_Chandra_Sekar_Resume_FINAL_v16.pdf" download className="btn btn-primary btn-resume">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
            <a href="https://www.linkedin.com/in/suresh-chandrasekar/" target="_blank" rel="noopener noreferrer me" className="btn btn-outline">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              Contact on LinkedIn
            </a>
            <div className="hero-links">
              <a href="#experience" className="hero-link">
                View Experience
              </a>
              <span className="hero-link-sep">·</span>
              <a href="https://github.com/sureshchandrasekar" target="_blank" rel="noopener noreferrer me" className="hero-link">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="section" aria-labelledby="about-heading">
        <div className="container">
          <div className="section-header reveal" ref={revealRef}>
            <p className="section-label">Who I am</p>
            <h2 className="section-title" id="about-heading">
              About Me
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-photo reveal" ref={revealRef}>
              <div className="photo-frame">
                <Image
                  src="/images/profile-800.jpg"
                  alt="Suresh Chandra Sekar"
                  id="profile-img"
                  width={800}
                  height={1198}
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="avatar-fallback" id="avatar-fallback" role="img" aria-label="Initials: SCS">
                  <span aria-hidden="true">SCS</span>
                </div>
              </div>
            </div>

            <div className="about-details reveal" ref={revealRef}>
              <p className="about-summary">
                I'm a Senior Backend Engineer with <strong>7+ years of experience</strong> building Python APIs, cloud integrations, and event-driven backend systems. My work centers on turning complex product and platform problems into reliable, maintainable systems that perform well at enterprise scale.
              </p>
              <div className="detail-grid">
                <div className="detail-item">
                  <span className="detail-label">Name</span>
                  <span className="detail-value">Suresh Chandra Sekar</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Location</span>
                  <span className="detail-value">Chennai, India</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Experience</span>
                  <span className="detail-value">7+ Years</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Focus</span>
                  <span className="detail-value">Backend APIs, cloud platforms, and reliability engineering</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Education</span>
                  <span className="detail-value">B.E. Computer Science (Anna University)</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Availability</span>
                  <span className="detail-value">Open to Relocation & Remote</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="section section-alt" aria-labelledby="skills-heading">
        <div className="container">
          <div className="section-header reveal" ref={revealRef}>
            <p className="section-label">What I work with</p>
            <h2 className="section-title" id="skills-heading">
              Key Skills
            </h2>
          </div>
          <div className="skills-grid">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="skill-group reveal" ref={revealRef}>
                <h3 className="skill-group-title">{skillGroup.category}</h3>
                <div className="skill-tags" role="list">
                  {skillGroup.primary.map((skill) => (
                    <span key={skill} className="skill-tag skill-tag--primary" role="listitem">
                      {skill}
                    </span>
                  ))}
                  {skillGroup.secondary.map((skill) => (
                    <span key={skill} className={`skill-tag ${skillGroup.primary.length > 0 ? 'skill-tag--dim' : ''}`} role="listitem">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="section" aria-labelledby="experience-heading">
        <div className="container">
          <div className="section-header reveal" ref={revealRef}>
            <p className="section-label">My journey</p>
            <h2 className="section-title" id="experience-heading">
              Work Experience
            </h2>
          </div>
          <div className="timeline" role="list">
            <div className="timeline-progress" aria-hidden="true"></div>

            {timeline.map((item, idx) => (
              <article key={idx} className="timeline-item reveal" role="listitem" ref={revealRef}>
                <div className="timeline-dot" aria-hidden="true"></div>
                <div className="timeline-card">
                  <div className="timeline-meta">
                    <span className="timeline-period">{item.period}</span>
                    {item.badge && <span className="timeline-badge">{item.badge}</span>}
                  </div>
                  <h3 className="timeline-role">{item.role}</h3>
                  <p className="timeline-company">{item.company}</p>
                  <p className="timeline-summary">{item.summary}</p>
                  <ul className="timeline-bullets" aria-label="Responsibilities and achievements">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} dangerouslySetInnerHTML={{ __html: highlight }} />
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="section section-alt" aria-labelledby="projects-heading">
        <div className="container">
          <div className="section-header reveal" ref={revealRef}>
            <p className="section-label">Things I've built</p>
            <h2 className="section-title" id="projects-heading">
              Notable Projects
            </h2>
          </div>
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <article key={idx} className="project-card reveal" ref={revealRef}>
                <div className="project-header">
                  <div className="project-tech" role="list" aria-label="Technologies used">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag" role="listitem">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-org">{project.org}</p>
                <ul className="project-desc">
                  {project.points.map((point, pIdx) => (
                    <li key={pIdx} dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section id="blog" className="section section-alt" aria-labelledby="blog-heading">
        <div className="container">
          <div className="section-header reveal" ref={revealRef}>
            <p className="section-label">Thoughts & Writings</p>
            <h2 className="section-title" id="blog-heading">
              Latest Articles
            </h2>
          </div>

          <div className="blog-grid reveal" id="blog-grid" ref={revealRef}>
            {loading ? (
              <div className="api-loading">Fetching articles...</div>
            ) : articles.length > 0 ? (
              articles.map((article) => (
                <a
                  key={article.guid}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-card"
                >
                  <h3>{article.title}</h3>
                  <p>{article.pubDate}</p>
                </a>
              ))
            ) : (
              <p className="api-loading">No articles found. Check back soon!</p>
            )}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" className="section" aria-labelledby="education-heading">
        <div className="container">
          <div className="section-header reveal" ref={revealRef}>
            <p className="section-label">Academic background & growth</p>
            <h2 className="section-title" id="education-heading">
              Education & Certifications
            </h2>
          </div>

          <div className="edu-grid">
            <div className="edu-card reveal" ref={revealRef}>
              <div className="edu-content">
                <h3>Bachelor of Engineering — Computer Science & Engineering</h3>
                <p className="edu-institution">T.J.S. Engineering College, Tamil Nadu (Anna University)</p>
                <p className="edu-meta">2014 – 2018 · CGPA: 6.8</p>
              </div>
            </div>
          </div>

          <h3 className="certs-heading reveal" ref={revealRef}>
            Selected Learning
          </h3>
          <div className="certs-grid" role="list">
            {certifications.map((cert, idx) => (
              <div key={idx} className="cert-card reveal" role="listitem" ref={revealRef}>
                <div className="cert-dot" aria-hidden="true"></div>
                <div className="cert-content">
                  <p className="cert-name">{cert.name}</p>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="section section-alt" aria-labelledby="contact-heading">
        <div className="container">
          <div className="section-header reveal" ref={revealRef}>
            <p className="section-label">Open to backend roles</p>
            <h2 className="section-title" id="contact-heading">
              Contact
            </h2>
            <div className="contact-availability">
              <span className="avail-dot"></span>
              <span>Available for new opportunities &mdash; response within 24h via LinkedIn</span>
            </div>
          </div>

          <div className="contact-card reveal" ref={revealRef}>
            <div className="contact-row">
              <div className="contact-item contact-item--static">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                  </svg>
                </div>
                <div>
                  <p className="contact-label">Call</p>
                  <p className="contact-value">Available on request via LinkedIn</p>
                </div>
              </div>

              <div className="contact-item contact-item--static">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="contact-label">Email</p>
                  <p className="contact-value">Shared on request through LinkedIn</p>
                </div>
              </div>

              <a href="https://www.linkedin.com/in/suresh-chandrasekar/" target="_blank" rel="noopener noreferrer me" className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <p className="contact-label">LinkedIn</p>
                  <p className="contact-value">linkedin.com/in/sureshchandrasekar</p>
                </div>
              </a>

              <a href="https://github.com/sureshchandrasekar" target="_blank" rel="noopener noreferrer me" className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.547 2.914 1.186.092-.924.35-1.546.636-1.903-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </div>
                <div>
                  <p className="contact-label">GitHub</p>
                  <p className="contact-value">github.com/sureshchandrasekar</p>
                </div>
              </a>

              <a href="https://medium.com/@sureshchandrasekar" target="_blank" rel="noopener noreferrer me" className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <div>
                  <p className="contact-label">Blog</p>
                  <p className="contact-value">medium.com/@sureshchandrasekar</p>
                </div>
              </a>

              <div className="contact-item contact-item--static">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="contact-label">Location</p>
                  <p className="contact-value">Chennai, India · Open to Remote</p>
                </div>
              </div>

              <a href="documents/Suresh_Chandra_Sekar_Resume_FINAL_v16.pdf" download className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>
                <div>
                  <p className="contact-label">Resume</p>
                  <p className="contact-value">Download resume</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="footer">
        <div className="footer-content">
          <div className="footer-cta">
            <p className="footer-message">
              I'm currently looking for senior backend, platform, and cloud engineering roles where I can own APIs, integrations, and system reliability at scale.
            </p>
            <a href="https://www.linkedin.com/in/suresh-chandrasekar/" target="_blank" rel="noopener noreferrer me" className="btn btn-primary">
              Contact on LinkedIn
            </a>
          </div>
          <p>
            Suresh Chandra Sekar · Senior Backend Engineer · <span id="current-year">2026</span>
          </p>
          <p className="footer-sub">Built with Python instincts and clean code habits</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        id="scroll-to-top"
        aria-label="Scroll to top"
        title="Back to top"
        onClick={scrollToTop}
        style={{ display: isVisible ? 'flex' : 'none' }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </>
  );
}
