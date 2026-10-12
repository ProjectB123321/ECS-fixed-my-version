import dynamic from "next/dynamic";
import React from "react";
import Theme2016 from "../../../components/theme2016";
import UserProfileStore from "../../../components/userProfile/stores/UserProfileStore";

// Sunucu tarafında hata vermemesi için bileşeni dinamik olarak yüklüyoruz
const UserProfile = dynamic(() => import("../../../components/userProfile"), { ssr: false });

const UserProfilePage = props => {
  const { userId } = props;

  return (
    <UserProfileStore.Provider>
      <Theme2016>
        <UserProfile userId={userId} />
      </Theme2016>
    </UserProfileStore.Provider>
  );
}

export default UserProfilePage;

export async function getServerSideProps(context) {
  try {
    const userId = context.params?.userId || context.query?.userId || null;

    return {
      props: {
        userId,
        title: 'Profile - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        userId: null,
        title: 'Profile - Eggs21',
      },
    };
  }
}
