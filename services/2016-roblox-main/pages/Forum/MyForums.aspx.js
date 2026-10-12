import dynamic from "next/dynamic";
import React from "react";

const MyForumsContent = dynamic(
  () => import("../../components/myForumsContent"),
  { ssr: false }
);

const MyForumsPage = props => {
  return <MyForumsContent />;
}

export default MyForumsPage;

export async function getServerSideProps() {
  try {
    return {
      props: {
        title: 'My Forums - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        title: 'My Forums - Eggs21',
      },
    };
  }
}
