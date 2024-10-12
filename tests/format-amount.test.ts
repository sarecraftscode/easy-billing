import { describe, expect, it } from "vitest";
import formatAmount from "../src/helpers/format-amount";

describe("formatAmount", () => {
  it("should return 0.00 when no amount is provided", () => {
    expect(formatAmount(undefined)).toBe("0,00 €");
  });

  it("should format the amount 1000 to 1000,00 €", () => {
    expect(formatAmount(1000)).toBe("1 000,00 €");
  });
});
