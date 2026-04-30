import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suresh Chandra Sekar — Senior Python Backend Developer",
  description:
    "Suresh Chandra Sekar — Senior Python Backend Developer | FastAPI | AWS | Microservices. 7+ years of REST API design and cloud integrations. Based in Chennai, India.",
  openGraph: {
    title: "Suresh Chandra Sekar — Senior Python Backend Developer",
    description:
      "Senior Python Backend Developer | FastAPI | AWS | Microservices. Specialising in API design and scalable cloud platforms.",
    type: "website",
    url: "https://sureshchandrasekar.vercel.app/",
    images: [
      {
        url: "https://sureshchandrasekar.vercel.app/images/profile-800.jpg",
        width: 800,
        height: 800,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Suresh Chandra Sekar — Senior Python Backend Developer",
    description: "Senior Python Backend Developer | FastAPI | AWS | Microservices",
    images: ["https://sureshchandrasekar.vercel.app/images/profile-800.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Suresh Chandra Sekar",
              jobTitle: "Senior Software Development Engineer",
              description:
                "Senior Backend Engineer with 7+ years of Python development experience, specialising in REST API design and cloud SDK integrations.",
              email: "sureshkavitha1997@gmail.com",
              telephone: "+91-7904078868",
              sameAs: [
                "https://www.linkedin.com/in/suresh-chandrasekar/",
                "https://github.com/sureshchandrasekar",
                "https://medium.com/@sureshchandrasekar",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Chennai",
                addressCountry: "India",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "T.J.S. Engineering College, Tamil Nadu (Anna University)",
              },
            }),
          }}
        />

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fportfolio7177back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.18" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
