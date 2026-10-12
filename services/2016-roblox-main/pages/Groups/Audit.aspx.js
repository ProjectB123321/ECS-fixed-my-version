import dynamic from "next/dynamic";

const GroupAudit = dynamic(() => import("../../components/groupAudit"), { ssr: false });

const GroupAuditPage = props => {
  const { groupId, userId, action } = props;
  return <GroupAudit groupId={groupId} userId={userId} action={action} />;
}

export default GroupAuditPage;

export async function getServerSideProps(context) {
  try {
    return {
      props: {
        groupId: context.query?.groupid || null,
        userId: context.query?.userid || null,
        action: context.query?.action || null,
        title: 'Group Audit - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        groupId: null,
        userId: null,
        action: null,
        title: 'Group Audit - Eggs21',
      },
    };
  }
}
