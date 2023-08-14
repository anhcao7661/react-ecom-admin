"use client";

import { useEffect, useState } from "react";

import { StoreModel } from "@/components/modals/store-modal";

export const ModelProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModel />
    </>
  );
};
