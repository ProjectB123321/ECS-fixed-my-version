import dynamic from "next/dynamic";
import React from "react";

// Sunucu tarafında hata vermemesi için bileşeni dinamik olarak yüklüyoruz
const UserInventory = dynamic(() => import("../../../components/userInventory"), { ssr: false });

const UserInventoryPage = props => {
  const { userId } = props;

  return <UserInventory userId={userId} mode='Inventory' />;
}

export default UserInventoryPage;

export async function getServerSideProps(context) {
  try {
    const userId = context.params?.userId || context.query?.userId || null;

    return {
      props: {
        userId,
        title: 'Inventory - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        userId: null,
        title: 'Inventory - Eggs21',
      },
    };
  }
}
