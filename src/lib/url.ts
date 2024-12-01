import type { SSEChannelId } from "@/server/shared-times";

// Compare URLs in the following formats:
// "http://localhost:8888/audio/sfx/maoudamashii_se_onepoint26.mp3"
// "https://localhost:8888/audio/sfx/maoudamashii_se_onepoint26.mp3"
// "/audio/sfx/maoudamashii_se_onepoint26.mp3"
// "audio/sfx/maoudamashii_se_onepoint26.mp3"
export const isSamePath = (
  path1: string | null | undefined,
  path2: string | null | undefined,
) => {
  if (!path1 || !path2) return false;
  return normalizePath(path1) === normalizePath(path2);
};

const normalizePath = (path: string) => {
  try {
    const url = new URL(path, "http://localhost");
    return url.pathname.replace(/\/+$/, ""); // Remove trailing slashes
  } catch {
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    return normalizedPath.replace(/\/+$/, "");
  }
};

export const url = {
  sharedTimer: (id: SSEChannelId) => `/timers/${id}`,
};
