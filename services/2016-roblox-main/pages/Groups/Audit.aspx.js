import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

const Theme2016 = dynamic(() => import("../../components/theme2016"), { ssr: false });
const GroupAudit = dynamic(() => import("../../components/groupAudit"), { ssr: false });

const GroupAuditPage = props => {
  const { groupId } = props;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Theme2016>
      <GroupAudit groupId={groupId} />
    </Theme2016>
  );
}

export default GroupAuditPage;

export async function getServerSideProps(context) {
  try {
    const groupId = context.params?.groupId || context.query?.id || context.query?.groupId || null;

    return {
      props: {
        groupId,
        title: 'Group Audit - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        groupId: null,
        title: 'Group Audit - Eggs21',
      },
    };
  }
}
