import dynamic from "next/dynamic";
import React from "react";

const UserFriendsContent = dynamic(
  () => import("../../../components/userFriendsContent"),
  { ssr: false }
);

const UserFriendsPage = props => {
  return <UserFriendsContent userId={props.userId} />;
}

export default UserFriendsPage;

export async function getServerSideProps(context) {
  try {
    const userId = context.params?.userId || context.query?.userId || null;

    return {
      props: {
        userId,
        title: 'Friends - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        userId: null,
        title: 'Friends - Eggs21',
      },
    };
  }
}
