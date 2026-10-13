import React, { useState, useEffect } from "react";
import AuthenticationStore from "../stores/authentication";

export default function IndexContent() {
  const [isMounted, setIsMounted] = useState(false);
  const auth = AuthenticationStore.useContainer();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && auth.isAuthenticated) {
      window.location.href = '/home';
    }
  }, [isMounted, auth.isAuthenticated]);

  if (!isMounted) return null;

  return null;
}
