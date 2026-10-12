import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import GamesPageStore from "../../stores/gamesPage";

const Theme2016 = dynamic(() => import("../../components/theme2016"), { ssr: false });
const Games = dynamic(() => import("../../components/gamesPage"), { ssr: false });

const GamesPage = props => {
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

export default GamesPage;

export async function getServerSideProps() {
  try {
    return {
      props: {
        title: 'Games - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        title: 'Games - Eggs21',
      },
    };
  }
}
