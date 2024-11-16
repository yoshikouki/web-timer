import { describe, expect, it } from "bun:test";
import { isSamePath } from "./url";

describe("isSamePath", () => {
  it("should return true if the paths are the same", () => {
    expect(
      isSamePath(
        "http://localhost:8888/audio/sfx/maoudamashii_se_onepoint26.mp3",
        "/audio/sfx/maoudamashii_se_onepoint26.mp3",
      ),
    ).toBe(true);
    expect(
      isSamePath(
        "http://localhost:8888/audio/sfx/maoudamashii_se_onepoint26.mp3",
        "https://localhost:8888/audio/sfx/maoudamashii_se_onepoint26.mp3",
      ),
    ).toBe(true);
    expect(
      isSamePath(
        "/audio/sfx/maoudamashii_se_onepoint26.mp3",
        "audio/sfx/maoudamashii_se_onepoint26.mp3",
      ),
    ).toBe(true);
  });
  it("should return false if the paths are different", () => {
    expect(
      isSamePath(
        "http://localhost:8888/audio/sfx/maoudamashii_se_onepoint26.mp3",
        "/audio/sfx/maoudamashii_se_onepoint27.mp3",
      ),
    ).toBe(false);
  });
});
