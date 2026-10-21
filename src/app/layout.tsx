import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import { person, site, socials } from "@/content/profile";
import "./globals.css";

const display = Sora({ variable: "--font-display", subsets: ["latin"], weight: ["500", "600", "700"] });
const body = Inter({ variable: "--font-body", subsets: ["latin"] });
const code = JetBrains_Mono({ variable: "--font-code", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s — ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Faridul Islam",
    "bddevfarid",
    "WordPress plugin developer",
    "WordPress security",
    "Elementor expert",
    "Element Pack",
    "Prime Slider",
    "Ultimate Post Kit",
    "WordPress engineer Bangladesh",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: site.locale,
    firstName: "Faridul",
    lastName: "Islam",
    username: site.handle,
  },
  twitter: {
    card: "summary_large_image",
    site: "@bddevfarid",
    creator: "@bddevfarid",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f6f2" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0e10" },
  ],
};

// Runs before first paint so the saved or system theme never flashes.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='light'}document.documentElement.classList.add('js')})()`;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  alternateName: site.handle,
  url: site.url,
  image: `${site.url}${person.photo}`,
  jobTitle: person.role,
  worksFor: { "@type": "Organization", name: person.company },
  address: { "@type": "PostalAddress", addressLocality: "Bogura", addressCountry: "BD" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Bogura Polytechnic Institute" },
  knowsAbout: ["WordPress", "WordPress plugin development", "Web application security", "Elementor", "Web performance"],
  sameAs: socials.map((s) => s.href),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${code.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="min-h-screen bg-bg text-ink">{children}</body>
    </html>
  );
}
