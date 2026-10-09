import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, MapPin, Instagram, Linkedin, Youtube, Facebook } from "lucide-react";
import logo from "@/assets/indiajoy-logo.webp";
import { Countdown } from "@/components/Countdown";
import { SubscribeForm } from "@/components/SubscribeForm";
import { PixelWorld } from "@/components/PixelWorld";
import { Button } from "@/components/ui/button";

const DESC = "IndiaJoy 2026 returns December 7–13 to Bharat Future City, Hyderabad. One venue, seven days, ten events celebrating film, animation, VFX, gaming, comics and esports.";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "IndiaJoy 2026 | Coming Soon" },
    { name: "description", content: DESC },
    { property: "og:title", content: "IndiaJoy 2026 | Coming Soon" },
    { property: "og:description", content: DESC },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});
const XIcon = ({ className }: { className?: string }) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden><path d="M4 3h5l11 18h-5L4 3Zm0 18L20 3" /></svg>;
const socials = [
  { label: "Instagram", href: "https://www.instagram.com/indiajoyfestival/", Icon: Instagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/104925129/", Icon: Linkedin },
  { label: "YouTube", href: "https://youtube.com/@indiajoyofficial", Icon: Youtube },
  { label: "Facebook", href: "https://www.facebook.com/Indiajoy.in", Icon: Facebook },
  { label: "X", href: "https://x.com/Indiajoyin", Icon: XIcon },
];
const industries = ["FILM", "ANIMATION", "VFX", "GAMING", "COMICS", "ESPORTS", "AND BEYOND"];
function Index() {
  return <div className="festival-page">
    <header className="festival-header grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
      <div className="brand-lockup flex min-w-0 items-center gap-5">
        <img src={logo} alt="IndiaJoy" className="official-logo shrink-0" width={1920} height={584} />
        <p className="brand-descriptor">ASIA'S BIGGEST<br />DIGITAL ENTERTAINMENT<br />FESTIVAL</p>
      </div>
      <div className="event-header font-mono-brand text-xs font-bold uppercase"><span>DEC 7–13, 2026</span><br />BHARAT FUTURE CITY<br />HYDERABAD, INDIA</div>
    </header>
    <main className="festival-main">
      <section className="coming-content min-w-0">
        <p className="story-tag font-mono-brand">STORIES · GAMES · DREAMS</p>
        <h1 className="coming-title font-display"><span>COMING</span><span>SOON</span></h1>
        <div className="loading-block">
          <div className="loading-track" aria-hidden="true"><div className="loading-fill" /></div>
          <p className="font-mono-brand text-sm font-bold">LOADING INDIAJOY 2026...</p>
        </div>
        <p className="supporting-copy font-mono-brand">We're working on something extraordinary.<br className="desktop-break" /> The official IndiaJoy 2026 website will be live soon.<br className="desktop-break" /> Stay tuned for updates, announcements and more.</p>
        <p className="event-scale"><strong className="text-brand-red">1</strong> VENUE <span>–</span> <strong className="text-brand-cyan">7</strong> DAYS <span>–</span> <strong className="text-brand-lavender">10</strong> EVENTS</p>
        <div className="event-location font-mono-brand"><span><CalendarDays aria-hidden />DEC 7–13, 2026</span><span className="location-divider" aria-hidden>|</span><span><MapPin aria-hidden />BHARAT FUTURE CITY, HYDERABAD</span></div>
        <Countdown />
        <div className="subscription"><SubscribeForm /></div>
        <footer className="social-footer"><span className="font-mono-brand text-xs font-bold">FOLLOW US</span><ul className="flex gap-3">{socials.map(({ label, href, Icon }) => <li key={label}><Button asChild variant="ghost" size="icon" className="social-icon" ><a href={href} target="_blank" rel="noopener noreferrer" aria-label={`IndiaJoy on ${label}`} title={label}><Icon /></a></Button></li>)}</ul></footer>
      </section>
      <section className="game-art" aria-label="IndiaJoy arcade cityscape">
        <PixelWorld />
        <ul className="industries font-mono-brand">{industries.map((industry, i) => <li key={industry}><span className={i === 0 ? "text-brand-red" : i === 1 ? "text-brand-cyan" : "text-brand-lavender"}>✚</span>{industry}</li>)}</ul>
        <p className="creative-tag font-mono-brand">A CREATIVE<br />TOMORROW<br />TOGETHER →</p>
      </section>
    </main>
    <span className="pixel-spark spark-one" aria-hidden>✚</span><span className="pixel-spark spark-two" aria-hidden>✚</span>
  </div>;
}
