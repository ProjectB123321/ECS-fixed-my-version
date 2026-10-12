import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import UserFriendsStore from "../../../components/userFriends/stores/userFriendsStore";

const Theme2016 = dynamic(() => import("../../../components/theme2016"), { ssr: false });
const UserFriends = dynamic(() => import("../../../components/userFriends"), { ssr: false });

const UserFriendsPage = props => {
  const { userId } = props;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Theme2016>
      <UserFriendsStore.Provider>
        <UserFriends userId={userId} />
      </UserFriendsStore.Provider>
    </Theme2016>
  );
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
