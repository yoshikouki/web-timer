"use client";

import { useContext } from "react";
import { HeadTitleContext } from "./provider";

export { HeadTitleProvider } from "./provider";

export const useHeadTitle = () => useContext(HeadTitleContext);

export const HeadTitle = () => {
  const { title } = useContext(HeadTitleContext);
  if (!title) return null;
  return <title>{title}</title>;
};
