"use client";

import { createContext, useState } from "react";

export const HeadTitleContext = createContext<{
  title: string;
  setTitle: (title: string) => void;
}>({
  title: "",
  setTitle: () => {},
});

export const HeadTitleProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const [title, setTitle] = useState<string>("");
  return (
    <HeadTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </HeadTitleContext.Provider>
  );
};
