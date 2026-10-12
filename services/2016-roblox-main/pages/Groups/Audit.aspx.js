import dynamic from "next/dynamic";
import React from "react";

const GroupAuditContent = dynamic(
  () => import("../../components/groupAuditContent"),
  { ssr: false }
);

const GroupAuditPage = props => {
  return <GroupAuditContent groupId={props.groupId} />;
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
