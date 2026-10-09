import { useEffect, useState } from "react";

// Dec 7, 2026 00:00 IST (Asia/Kolkata, UTC+05:30)
export const EVENT_START = Date.parse("2026-12-07T00:00:00+05:30");

export function getRemaining(now: number, target = EVENT_START) {
  const diff = Math.max(0, target - now);
  return {
    done: diff === 0,
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  };
}

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const r = now === null ? null : getRemaining(now);

  if (r?.done) {
    return (
      <div className="border-y border-foreground/80 py-6">
        <p className="font-display text-3xl uppercase">IndiaJoy is live.</p>
        <p className="font-mono-brand mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Welcome to Bharat Future City, Hyderabad
        </p>
      </div>
    );
  }

  const units: [string, number | undefined][] = [
    ["Days", r?.days],
    ["Hours", r?.hours],
    ["Minutes", r?.minutes],
    ["Seconds", r?.seconds],
  ];

  return (
    <div className="countdown-grid grid grid-cols-4 gap-2" role="timer" aria-label="Countdown to IndiaJoy 2026">
      {units.map(([label, v], i) => (
        <div key={label} className={`timer-panel timer-${i} px-1 py-3 text-center`}>
          <div className="font-display text-2xl tabular-nums">
            {v === undefined ? "--" : String(v).padStart(2, "0")}
          </div>
          <div className="font-mono-brand mt-1 text-[10px] uppercase text-primary-foreground sm:text-xs">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
