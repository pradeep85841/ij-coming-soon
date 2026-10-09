import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

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
      <h2 className="font-mono-brand text-sm font-bold uppercase">Be the first to know</h2>
      <div className="subscribe-row mt-2 grid grid-cols-[minmax(0,1fr)_auto] gap-3">
        <label htmlFor="email" className="sr-only">Email address</label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          aria-invalid={status.kind === "error"}
          aria-describedby="form-status"
          className="pixel-input min-w-0 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
        />
        <Button
          variant="arcade"
          type="submit"
          disabled={status.kind === "loading"}
          className="h-11 shrink-0 rounded-none px-5 text-sm uppercase"
        >
          {status.kind === "loading" ? "Sending…" : "Notify me →"}
        </Button>
      </div>
      <label className="mt-3 flex cursor-pointer items-start gap-2 text-[11px] text-foreground">
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 accent-brand-red" />
        Get the latest updates, speaker announcements and event news.
      </label>
      <p id="form-status" role="status" aria-live="polite" className={`mt-1 text-xs ${tone}`}>
        {status.msg}
      </p>
    </form>
  );
}
