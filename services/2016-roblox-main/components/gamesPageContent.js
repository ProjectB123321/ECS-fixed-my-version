import React, { useState, useEffect } from "react";
import Theme2016 from "./theme2016";
import Games from "./gamesPage";
import GamesPageStore from "../stores/gamesPage";

export default function GamesPageContent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Theme2016>
      <GamesPageStore.Provider>
        <Games />
      </GamesPageStore.Provider>
    </Theme2016>
  );
}
