import dynamic from "next/dynamic";
import React from "react";

const ForumHomeContent = dynamic(
  () => import("../../components/forumHomeContent"),
  { ssr: false }
);

const DefaultPage = () => {
  return <ForumHomeContent />;
}

export default DefaultPage;

export async function getServerSideProps() {
  try {
    return {
      props: {
        title: 'Forums - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        title: 'Forums - Eggs21',
      },
    };
  }
}
