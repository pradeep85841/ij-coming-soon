import { useState, type FormEvent } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Connect a real email service here. Return normally on success, throw on failure.
 * Until configured, this throws so we never falsely confirm a subscription.
 */
async function submitSubscription(_email: string, _consent: boolean): Promise<void> {
  throw new NotConfiguredError();
}
class NotConfiguredError extends Error {}

type Status = { kind: "idle" | "loading" | "success" | "error" | "dev"; msg?: string };

export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status.kind === "loading") return;
    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      setStatus({ kind: "error", msg: "Please enter a valid email address." });
      return;
    }
    setStatus({ kind: "loading" });
    try {
      await submitSubscription(value, consent);
      setStatus({ kind: "success", msg: "You're on the list. We'll be in touch soon." });
      setEmail("");
    } catch (err) {
      if (err instanceof NotConfiguredError) {
        setStatus({ kind: "dev", msg: "Sign-ups aren't connected yet — your email was not saved. Please check back soon." });
      } else {
        setStatus({ kind: "error", msg: "Something went wrong. Please try again." });
      }
    }
  }

  const tone =
    status.kind === "success" ? "text-brand-cyan" : status.kind === "error" ? "text-destructive" : "text-muted-foreground";

  return (
    <form onSubmit={onSubmit} noValidate className="w-full">
      <h2 className="font-display text-xl uppercase sm:text-2xl">Be the first to know</h2>
      <div className="mt-4 flex flex-col border border-foreground sm:flex-row">
        <label htmlFor="email" className="sr-only">Email address</label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          aria-invalid={status.kind === "error"}
          aria-describedby="form-status"
          className="min-w-0 flex-1 bg-card px-4 py-3 text-base outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
        />
        <button
          type="submit"
          disabled={status.kind === "loading"}
          className="font-mono-brand bg-primary px-6 py-3 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
        >
          {status.kind === "loading" ? "Sending…" : "Notify me →"}
        </button>
      </div>
      <label className="mt-3 flex cursor-pointer items-start gap-2 text-xs text-muted-foreground">
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 accent-brand-red" />
        Get the latest updates, speaker announcements and event news.
      </label>
      <p id="form-status" role="status" aria-live="polite" className={`mt-2 min-h-5 text-sm ${tone}`}>
        {status.msg}
      </p>
    </form>
  );
}
