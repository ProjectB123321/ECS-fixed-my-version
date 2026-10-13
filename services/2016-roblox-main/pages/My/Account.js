import dynamic from "next/dynamic";
import React from "react";

const MyAccountContent = dynamic(
  () => import("../../components/myAccountContent"),
  { ssr: false }
);

const MyAccountPage = () => {
  return <MyAccountContent />;
}

export default MyAccountPage;

export async function getServerSideProps() {
  try {
    return {
      props: {
        title: 'Account - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        title: 'Account - Eggs21',
      },
    };
  }
}
