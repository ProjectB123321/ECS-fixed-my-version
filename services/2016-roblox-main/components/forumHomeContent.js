import React, { useState, useEffect } from "react";
import ForumHome from "./forumHome";

export default function ForumHomeContent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <ForumHome />;
}
