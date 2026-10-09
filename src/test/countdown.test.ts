import { describe, it, expect } from "vitest";
import { EVENT_START, getRemaining } from "@/components/Countdown";

describe("countdown", () => {
  it("targets Dec 7 2026 midnight IST", () => {
    expect(new Date(EVENT_START).toISOString()).toBe("2026-12-06T18:30:00.000Z");
  });
  it("is done at target", () => {
    expect(getRemaining(EVENT_START).done).toBe(true);
  });
  it("computes 1 day 1 hour before", () => {
    const r = getRemaining(EVENT_START - 90000000);
    expect([r.days, r.hours, r.minutes]).toEqual([1, 1, 0]);
  });
});
