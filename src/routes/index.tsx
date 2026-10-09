import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin, Instagram, Linkedin, Youtube, Facebook } from "lucide-react";
import hero from "@/assets/indiajoy-hero.png";
import { Countdown } from "@/components/Countdown";
import { SubscribeForm } from "@/components/SubscribeForm";

const DESC =
  "IndiaJoy 2026 returns December 7–13 to Bharat Future City, Hyderabad. Stay tuned for announcements from the worlds of film, animation, VFX, gaming, comics and digital entertainment.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IndiaJoy 2026 | Coming Soon" },
      { name: "description", content: DESC },
      { property: "og:title", content: "IndiaJoy 2026 | Coming Soon" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const XIcon = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={p.className} aria-hidden>
    <path d="M18.9 2H22l-7.4 8.5L23 22h-6.8l-5.3-6.9L4.8 22H1.7l7.9-9L1 2h7l4.8 6.3L18.9 2Zm-1.2 18h1.7L6.4 3.9H4.6L17.7 20Z" />
  </svg>
);

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/indiajoyfestival/", Icon: Instagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/104925129/", Icon: Linkedin },
  { label: "YouTube", href: "https://youtube.com/@indiajoyofficial", Icon: Youtube },
  { label: "Facebook", href: "https://www.facebook.com/Indiajoy.in", Icon: Facebook },
  { label: "X", href: "https://x.com/Indiajoyin", Icon: XIcon },
];

const industries = ["Film", "Animation", "VFX", "Gaming", "Comics", "Esports", "And beyond"];

function Index() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col px-5 sm:px-8 lg:px-12">
      {/* Header */}
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-foreground py-5">
        <div className="flex items-center gap-4">
          {/* Replace with the official IndiaJoy logo asset when supplied */}
          <span className="font-display text-2xl tracking-tight sm:text-3xl">
            INDIA<span className="text-brand-red">JOY</span>
          </span>
          <span className="font-mono-brand hidden max-w-[200px] border-l border-foreground/40 pl-4 text-[10px] uppercase leading-tight tracking-[0.15em] md:block">
            Asia's biggest digital entertainment festival
          </span>
        </div>
        <div className="font-mono-brand text-left text-[10px] uppercase leading-snug tracking-[0.15em] sm:text-right sm:text-xs">
          <div className="font-medium">Dec 7–13, 2026</div>
          <div className="text-muted-foreground">Bharat Future City, Hyderabad, India</div>
        </div>
      </header>

      <main className="flex flex-1 flex-col gap-12 py-10 lg:gap-16 lg:py-14">
        {/* Hero: headline + artwork */}
        <div className="grid flex-1 items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <section className="animate-rise flex min-w-0 flex-col gap-6">
            <p className="font-mono-brand text-xs uppercase tracking-[0.35em] text-brand-red">Stories · Games · Dreams</p>
            <h1 className="font-display text-[clamp(3.5rem,9.5vw,8rem)] uppercase leading-[0.85] tracking-tight">
              Coming
              <br />
              Soon<span className="text-brand-red">.</span>
            </h1>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              We're working on something extraordinary. The official IndiaJoy 2026 website will be live soon. Stay tuned
              for updates, announcements and more.
            </p>
            <p className="font-display text-xl uppercase sm:text-2xl">
              <span className="text-brand-red">1</span> Venue – <span className="text-brand-cyan">7</span> Days –{" "}
              <span className="text-brand-lavender">10</span> Events
            </p>
          </section>

          <section aria-label="The IndiaJoy creative universe" className="animate-rise flex min-w-0 flex-col gap-4 [animation-delay:200ms]">
            <figure className="relative border border-foreground bg-card">
              <img
                src={hero}
                alt="The Charminar in Hyderabad surrounded by film, gaming, virtual reality, animation and comics artwork"
                width={964}
                height={868}
                className="block h-auto w-full"
              />
              <figcaption className="font-mono-brand absolute left-3 top-3 bg-background/85 px-2 py-1 text-[10px] uppercase tracking-[0.2em]">
                17.3616° N, 78.4747° E
              </figcaption>
            </figure>
            <ul className="font-mono-brand flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-foreground pt-3 text-[11px] uppercase tracking-[0.25em] sm:text-xs">
              {industries.map((i, n) => (
                <li key={i} className={n === industries.length - 1 ? "text-brand-red" : ""}>{i}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Band: dates, countdown, sign-up */}
        <section className="animate-rise border-t border-foreground pt-8 [animation-delay:150ms]">
          <div className="font-mono-brand flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-[0.15em]">
            <span className="flex items-center gap-2">
              <Calendar className="size-4" strokeWidth={1.5} aria-hidden /> Dec 7–13, 2026
            </span>
            <span className="hidden w-px bg-foreground/30 sm:block" />
            <span className="flex items-center gap-2">
              <MapPin className="size-4" strokeWidth={1.5} aria-hidden /> Bharat Future City, Hyderabad
            </span>
          </div>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
            <Countdown />
            <SubscribeForm />
          </div>
        </section>
      </main>

      <footer className="flex flex-wrap items-end justify-between gap-6 border-t border-foreground py-6">
        <div className="flex flex-wrap items-center gap-5">
          <span className="font-mono-brand text-xs uppercase tracking-[0.25em]">Follow us</span>
          <ul className="flex gap-2">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`IndiaJoy on ${label}`}
                  className="flex size-10 items-center justify-center border border-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="font-mono-brand border-l-2 border-brand-red pl-3 text-xs uppercase leading-relaxed tracking-[0.25em]">
          A creative
          <br />
          tomorrow
          <br />
          together
        </p>
      </footer>
    </div>
  );
}
