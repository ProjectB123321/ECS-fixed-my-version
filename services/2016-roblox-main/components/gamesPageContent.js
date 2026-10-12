import React from "react";
import Theme2016 from "./theme2016";
import Games from "./gamesPage";
import GamesPageStore from "../stores/gamesPage";

export default function GamesPageContent() {
  return (
    <Theme2016>
      <GamesPageStore.Provider>
        <Games />
      </GamesPageStore.Provider>
    </Theme2016>
  );
}
