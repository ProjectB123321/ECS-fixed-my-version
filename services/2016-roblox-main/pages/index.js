import dynamic from "next/dynamic";
import React from "react";

const IndexContent = dynamic(
  () => import("../components/indexContent"),
  { ssr: false }
);

const IndexPage = () => {
  return <IndexContent />;
};

export default IndexPage;

export async function getServerSideProps() {
  try {
    return {
      props: {
        title: 'Home - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        title: 'Home - Eggs21',
      },
    };
  }
}
