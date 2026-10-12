import dynamic from "next/dynamic";
import React from "react";

const GamesPageContent = dynamic(
  () => import("../../components/gamesPageContent"),
  { ssr: false }
);

const GamesPage = () => {
  return <GamesPageContent />;
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
