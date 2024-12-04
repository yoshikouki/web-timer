import type { ChannelId } from "@/server/shared-times";

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
    const url = new URL(path, process.env.NEXT_PUBLIC_APP_URL);
    return url.pathname.replace(/\/+$/, ""); // Remove trailing slashes
  } catch {
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    return normalizedPath.replace(/\/+$/, "");
  }
};

export const sameOrigin = <T>(callback: (args: T) => string) => {
  return (_args?: T, _options?: { url: boolean }) => {
    const { args, options } =
      _args !== null && typeof _args === "object" && "url" in _args
        ? { args: undefined, options: _args }
        : { args: _args, options: _options };
    const path =
      args !== undefined ? callback(args) : callback(undefined as unknown as T);
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const url = new URL(path, baseUrl);

    if (options?.url) {
      return url.toString();
    }
    return url.pathname;
  };
};

export const url = {
  sharedTimers: {
    index: sameOrigin(() => "/timers"),
    show: sameOrigin((id: ChannelId) => `/timers/${id}`),
  },
};
