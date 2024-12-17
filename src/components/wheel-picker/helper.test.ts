import { describe, expect, it } from "bun:test";
import { isTiltableDigit } from "./helper";

describe("#isTiltableDigit", () => {
  it("should tilt only rightmost digit when tiltDigits is 1", () => {
    expect(isTiltableDigit({ index: 2, paddedLength: 3, tiltDigits: 1 })).toBe(
      true,
    );
    expect(isTiltableDigit({ index: 1, paddedLength: 3, tiltDigits: 1 })).toBe(
      false,
    );
    expect(isTiltableDigit({ index: 0, paddedLength: 3, tiltDigits: 1 })).toBe(
      false,
    );
  });

  it("should tilt only leftmost digit when paddedLength equals tiltDigits", () => {
    expect(isTiltableDigit({ index: 0, paddedLength: 2, tiltDigits: 2 })).toBe(
      true,
    );
    expect(isTiltableDigit({ index: 1, paddedLength: 2, tiltDigits: 2 })).toBe(
      false,
    );
  });

  it("should tilt only rightmost digit in other cases", () => {
    expect(isTiltableDigit({ index: 2, paddedLength: 3, tiltDigits: 2 })).toBe(
      true,
    );
    expect(isTiltableDigit({ index: 1, paddedLength: 3, tiltDigits: 2 })).toBe(
      false,
    );
    expect(isTiltableDigit({ index: 0, paddedLength: 3, tiltDigits: 2 })).toBe(
      false,
    );
  });
});
