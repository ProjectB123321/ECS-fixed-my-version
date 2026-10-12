import dynamic from "next/dynamic";
import React from "react";
import Theme2016 from "../../../components/theme2016";
import UserFriendsStore from "../../../components/userFriends/stores/userFriendsStore";

// Sunucu tarafında hata vermemesi için bileşeni dinamik olarak yüklüyoruz
const UserFriends = dynamic(() => import("../../../components/userFriends"), { ssr: false });

const UserFriendsPage = props => {
  const { userId } = props;

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
