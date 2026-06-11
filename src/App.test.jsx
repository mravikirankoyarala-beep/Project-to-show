import { describe, expect, it } from "vitest";

function hasMinimumResumeLength(text) {
  return text.trim().length >= 20;
}

describe("Resume validation", () => {
  it("accepts valid resume text", () => {
    expect(hasMinimumResumeLength("Data Analyst with SQL and Python experience")).toBe(true);
  });

  it("rejects very short resume text", () => {
    expect(hasMinimumResumeLength("Short")).toBe(false);
  });
});
