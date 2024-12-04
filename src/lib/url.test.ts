import { describe, expect, it } from "bun:test";
import { isSamePath, sameOrigin } from "./url";

describe("#isSamePath", () => {
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

describe("#sameOrigin", () => {
  describe("without args", () => {
    it("should return the correct path", () => {
      const callback = sameOrigin(() => "/timers");
      expect(callback()).toBe("/timers");
    });

    it("should return the correct path", () => {
      const callback = sameOrigin(() => "/timers");
      expect(callback({ url: false })).toBe("/timers");
    });

    it("should return the correct path", () => {
      const callback = sameOrigin(() => "/timers");
      expect(callback({ url: true })).toBe("https://localhost:8888/timers");
    });
  });

  describe("with one arg", () => {
    it("should return the correct path", () => {
      const callback = sameOrigin((id: string) => `/timers/${id}`);
      expect(callback("123")).toBe("/timers/123");
    });

    it("should return the correct path", () => {
      const callback = sameOrigin((id: string) => `/timers/${id}`);
      expect(callback("123", { url: false })).toBe("/timers/123");
    });

    it("should return the correct path", () => {
      const callback = sameOrigin((id: string) => `/timers/${id}`);
      expect(callback("123", { url: true })).toBe(
        "https://localhost:8888/timers/123",
      );
    });
  });

  describe("with object arg", () => {
    it("should return the correct path", () => {
      const callback = sameOrigin(
        ({ id1, id2 }: { id1: string; id2: string }) =>
          `/hoge/${id1}/fuga/${id2}`,
      );
      expect(callback({ id1: "123", id2: "456" })).toBe("/hoge/123/fuga/456");
    });
    it("should return the correct path", () => {
      const callback = sameOrigin(
        ({ id1, id2 }: { id1: string; id2: string }) =>
          `/hoge/${id1}/fuga/${id2}`,
      );
      expect(callback({ id1: "123", id2: "456" }, { url: false })).toBe(
        "/hoge/123/fuga/456",
      );
    });
    it("should return the correct path", () => {
      const callback = sameOrigin(
        ({ id1, id2 }: { id1: string; id2: string }) =>
          `/hoge/${id1}/fuga/${id2}`,
      );
      expect(callback({ id1: "123", id2: "456" }, { url: true })).toBe(
        "https://localhost:8888/hoge/123/fuga/456",
      );
    });
  });

  describe("with array arg", () => {
    it("should return the correct path", () => {
      const callback = sameOrigin(
        ([id1, id2]: [string, string]) => `/hoge/${id1}/fuga/${id2}`,
      );
      expect(callback(["123", "456"])).toBe("/hoge/123/fuga/456");
    });
    it("should return the correct path", () => {
      const callback = sameOrigin(
        ([id1, id2]: [string, string]) => `/hoge/${id1}/fuga/${id2}`,
      );
      expect(callback(["123", "456"], { url: false })).toBe(
        "/hoge/123/fuga/456",
      );
    });
    it("should return the correct path", () => {
      const callback = sameOrigin(
        ([id1, id2]: [string, string]) => `/hoge/${id1}/fuga/${id2}`,
      );
      expect(callback(["123", "456"], { url: true })).toBe(
        "https://localhost:8888/hoge/123/fuga/456",
      );
    });
  });
});
