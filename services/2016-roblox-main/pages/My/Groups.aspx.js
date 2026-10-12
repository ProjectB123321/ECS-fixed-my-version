import dynamic from "next/dynamic";
import React from "react";
import GroupPageStore from "../../components/myGroups/stores/groupPageStore";
import MyGroupsStore from "../../components/myGroups/stores/myGroupsStore";

// Sunucu tarafında hata vermemesi için bileşeni dinamik olarak yüklüyoruz
const MyGroups = dynamic(() => import("../../components/myGroups"), { ssr: false });

const MyGroupsPage = props => {
  const { gid } = props;

  return (
    <MyGroupsStore.Provider>
      <GroupPageStore.Provider>
        <MyGroups id={gid} />
      </GroupPageStore.Provider>
    </MyGroupsStore.Provider>
  );
}

export default MyGroupsPage;

export async function getServerSideProps(context) {
  try {
    const gid = context.query?.gid || null;

    return {
      props: {
        gid,
        title: 'Groups - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        gid: null,
        title: 'Groups - Eggs21',
      },
    };
  }
}
