import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

// Sunucu tarafında hata vermemesi için bileşeni dinamik olarak yüklüyoruz
const GroupAdmin = dynamic(() => import("../../components/groupAdmin"), { ssr: false });

const MyGroupAdmin = props => {
  const { groupId } = props;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <GroupAdmin groupId={groupId} />;
}

export default MyGroupAdmin;

export async function getServerSideProps(context) {
  try {
    const rawGid = context.query?.gid || null;
    const groupId = parseInt(rawGid, 10) || 0;

    return {
      props: {
        groupId,
        title: 'Group Admin - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        groupId: 0,
        title: 'Group Admin - Eggs21',
      },
    };
  }
}
