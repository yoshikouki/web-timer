"use client";

import { useContext, useEffect, useRef } from "react";
import { HeadTitleContext } from "./provider";

export { HeadTitleProvider } from "./provider";

export const useHeadTitle = () => {
  const { title, setTitle } = useContext(HeadTitleContext);
  const prevTitleRef = useRef<string | null>(null);

  useEffect(() => {
    if (!prevTitleRef.current) return;
    document.title = title || prevTitleRef.current;
  }, [title]);

  useEffect(() => {
    if (prevTitleRef.current) return;
    prevTitleRef.current = document.title;
  }, []);

  return { title, setTitle };
};
