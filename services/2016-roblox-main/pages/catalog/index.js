import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

const CatalogInner = dynamic(() => import("./catalogInner"), { ssr: false });

export default function CatalogContent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <CatalogInner />;
}
