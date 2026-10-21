import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { ArrowDown, ArrowUpRight, Check, MapPin, expertiseIcons } from "@/components/icons";
import {
  about,
  caseStudy,
  credentials,
  experience,
  expertise,
  hero,
  insights,
  person,
  plugins,
  socials,
  stack,
  stats,
} from "@/content/profile";

const linkedin = socials.find((s) => s.label === "LinkedIn")!.href;

function SectionHeading({ eyebrow, title, id }: { eyebrow: string; title: string; id?: string }) {
  return (
    <div className="mb-10 max-w-2xl" data-reveal>
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <h2 id={id} className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="grid-bg relative overflow-hidden border-b border-line">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-14 pb-20 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:pt-20 md:pb-28">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {person.availability}
          </p>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-accent">{hero.eyebrow}</p>
          <h1 className="font-display text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {hero.headline[0]} {hero.headline[1]}{" "}
            <span className="text-accent">{hero.headline[2]}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{hero.intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-ink transition hover:brightness-110"
            >
              See the plugins <ArrowDown width={16} height={16} />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-semibold transition hover:border-ink"
            >
              Connect on LinkedIn <ArrowUpRight width={16} height={16} />
            </a>
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm text-muted">
            <MapPin width={16} height={16} /> {person.location} · {person.company}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface-2 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.45)]">
            <Image
              src={person.photo}
              alt={`Portrait of ${person.name}`}
              width={832}
              height={844}
              preload
              sizes="(min-width: 768px) 420px, 90vw"
              className="aspect-[4/4.3] w-full object-cover"
            />
          </div>
          <figure
            aria-label="Example of an output-escaping fix"
            className="absolute -bottom-8 -left-4 w-[88%] max-w-sm rounded-2xl border border-line bg-surface p-4 font-mono text-[11px] leading-relaxed shadow-xl sm:-left-10 sm:text-xs"
          >
            <figcaption className="mb-2 flex items-center gap-1.5 text-muted">
              <span className="size-2 rounded-full bg-[#ff5f57]" />
              <span className="size-2 rounded-full bg-[#febc2e]" />
              <span className="size-2 rounded-full bg-[#28c840]" />
              <span className="ml-2">widget-render.php</span>
            </figcaption>
            <p className="text-warn line-through decoration-warn/60">
              echo &apos;&lt;div class=&quot;&apos; . $settings[&apos;class&apos;] . &apos;&quot;&gt;&apos;;
            </p>
            <p className="mt-1 text-accent">
              printf( &apos;&lt;div class=&quot;%s&quot;&gt;&apos;, esc_attr( $settings[&apos;class&apos;] ) );
            </p>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section aria-label="At a glance" className="border-b border-line bg-surface">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-line md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} data-reveal className="bg-surface px-4 py-8 sm:px-6 md:py-10">
            <dt className="text-sm text-muted">{s.label}</dt>
            <dd className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <SectionHeading eyebrow="About" title={about.title} id="about-title" />
      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted" data-reveal>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8" data-reveal>
          <p className="font-display text-lg font-semibold">What I keep out of production</p>
          <ul className="mt-5 space-y-4">
            {[
              "Unescaped output and string-built HTML",
              "Assets loaded on pages that never use them",
              "Locked features that fail WordPress.org review",
              "Releases that break the free + Pro combination",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-muted">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                  <Check width={12} height={12} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {expertise.map((e) => {
          const Icon = expertiseIcons[e.key as keyof typeof expertiseIcons];
          return (
            <li
              key={e.key}
              data-reveal
              className="group rounded-3xl border border-line bg-surface p-6 transition hover:-translate-y-0.5 hover:border-accent"
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-accent-soft text-accent">
                <Icon />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{e.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{e.body}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <li key={t} className="rounded-full bg-surface-2 px-3 py-1 font-mono text-xs text-muted">
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Plugins() {
  return (
    <section id="work" aria-labelledby="work-title" className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHeading eyebrow="Plugins I lead" title="Live on WordPress.org, running on real sites." id="work-title" />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {plugins.map((p) => (
            <li key={p.slug} data-reveal>
              <a
                href={`https://wordpress.org/plugins/${p.slug}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-3xl border border-line bg-bg p-6 transition hover:border-accent"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                  <ArrowUpRight className="shrink-0 text-muted transition group-hover:text-accent" />
                </div>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{p.blurb}</p>
                <div className="mt-6 flex items-end justify-between gap-4 border-t border-line pt-4">
                  <div>
                    <p className="font-display text-2xl font-semibold">{p.installs}</p>
                    <p className="text-xs text-muted">active installs</p>
                  </div>
                  <p className="font-mono text-xs text-muted">{p.rating}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">
          Install counts and ratings from WordPress.org. Plus Sigma Forms, Spin Wheel, One Accessibility and more.
        </p>
      </div>
    </section>
  );
}

function CaseStudy() {
  return (
    <section id="case-study" aria-labelledby="case-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div data-reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">{caseStudy.eyebrow}</p>
          <h2 id="case-title" className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {caseStudy.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{caseStudy.body}</p>
          <blockquote className="mt-6 border-l-2 border-accent pl-4 font-display text-lg font-medium">
            {caseStudy.lesson}
          </blockquote>
        </div>

        <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8" data-reveal>
          <p className="text-sm text-muted">Before vs. after, on benchmarked pages</p>
          <div className="mt-6 space-y-8">
            {caseStudy.metrics.map((m) => (
              <div key={m.label}>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-medium">{m.label}</p>
                  <p className="font-display text-2xl font-semibold text-accent">{m.result}</p>
                </div>
                <div className="mt-3 space-y-2" role="img" aria-label={`${m.label}: ${m.result} after Element Pack 10`}>
                  <div className="flex items-center gap-3">
                    <span className="w-12 font-mono text-xs text-muted">v9</span>
                    <div className="h-3 flex-1 rounded-full bg-surface-2">
                      <div className="h-3 rounded-full bg-muted/50" style={{ width: `${m.before}%` }} />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-12 font-mono text-xs text-muted">v10</span>
                    <div className="h-3 flex-1 rounded-full bg-surface-2">
                      <div className="h-3 rounded-full bg-accent" style={{ width: `${m.after}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-muted">Measured with Lighthouse under heavy CPU throttling, multiple runs per page.</p>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-title" className="border-y border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:py-28">
        <div>
          <SectionHeading eyebrow="Experience" title="Seven years, one team, a lot of shipped code." id="exp-title" />
          <div className="space-y-3" data-reveal>
            <p className="text-sm font-medium">Credentials</p>
            {credentials.map((c) => (
              <div key={c.title} className="rounded-2xl border border-line bg-bg p-4">
                <p className="font-medium">{c.title}</p>
                <p className="text-sm text-muted">
                  {c.issuer} · {c.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        <ol className="relative space-y-10 border-l border-line pl-8">
          {experience.map((job) => (
            <li key={job.role} data-reveal className="relative">
              <span className="absolute top-1.5 -left-[2.4rem] size-3 rounded-full border-2 border-accent bg-surface" />
              <p className="font-mono text-xs text-muted">{job.period}</p>
              <h3 className="mt-1 font-display text-xl font-semibold">{job.role}</h3>
              <p className="text-accent">{job.company}</p>
              <ul className="mt-4 space-y-2 text-muted">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-3 leading-relaxed">
                    <span className="mt-2.5 size-1 shrink-0 rounded-full bg-muted" />
                    {pt}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section id="insights" aria-labelledby="insights-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <SectionHeading eyebrow="Insights" title="Notes on building plugins people can trust." id="insights-title" />
      <ul className="grid gap-4 md:grid-cols-2">
        {insights.map((post) => (
          <li key={post.title} data-reveal>
            <a
              href={`${linkedin}recent-activity/all/`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between gap-6 rounded-3xl border border-line bg-surface p-6 transition hover:border-accent"
            >
              <div>
                <span className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent">{post.tag}</span>
                <h3 className="mt-4 font-display text-lg leading-snug font-semibold text-balance">{post.title}</h3>
                <p className="mt-2 text-muted">{post.summary}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted group-hover:text-accent">
                Read on LinkedIn <ArrowUpRight width={14} height={14} />
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-16" data-reveal>
        <p className="mb-4 text-sm font-medium">Tools I work with every day</p>
        <ul className="flex flex-wrap gap-2">
          {stack.map((s) => (
            <li key={s} className="rounded-full border border-line bg-surface px-4 py-2 font-mono text-sm">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="px-4 pb-20 sm:px-6">
      <div className="grid-bg mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-line bg-surface px-6 py-14 sm:px-12 md:py-20" data-reveal>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">Contact</p>
        <h2 id="contact-title" className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
          Building or securing a WordPress product? Let&apos;s talk.
        </h2>
        <p className="mt-5 max-w-xl text-lg text-muted">
          I&apos;m open to senior and lead WordPress roles — especially plugin security. The fastest way to reach me is a
          message on LinkedIn.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-ink transition hover:brightness-110"
          >
            Message me on LinkedIn <ArrowUpRight width={16} height={16} />
          </a>
        </div>
        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-8">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer me"
                className="group inline-flex items-baseline gap-2 text-sm"
              >
                <span className="font-medium group-hover:text-accent">{s.label}</span>
                <span className="font-mono text-xs text-muted">{s.handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-ink px-4 py-2 text-bg focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Plugins />
        <CaseStudy />
        <Experience />
        <Insights />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {person.name}. Built with Next.js.
          </p>
          <p>{person.location}</p>
        </div>
      </footer>
      <Reveal />
    </>
  );
}
