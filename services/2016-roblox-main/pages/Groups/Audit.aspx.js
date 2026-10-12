import dynamic from "next/dynamic";

// Sunucu tarafında hata vermemesi için bileşeni dinamik olarak yüklüyoruz
const GroupAudit = dynamic(() => import("../../components/groupAudit"), { ssr: false });

const GroupAuditPage = props => {
  const { groupId, userId, action } = props;

  return <GroupAudit groupId={groupId} userId={userId} action={action} />;
}

export default GroupAuditPage;

export async function getServerSideProps(context) {
  try {
    const groupId = context.query?.groupid || null;
    const userId = context.query?.userid || null;
    const action = context.query?.action || null;

    return {
      props: {
        groupId,
        userId,
        action,
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
