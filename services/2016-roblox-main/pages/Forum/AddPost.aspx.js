import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Sunucu tarafında hata vermemesi için dinamik import kullanıyoruz
const ForumThreadCreate = dynamic(() => import("../../components/forumThreadCreate"), { ssr: false });
const ForumPostReply = dynamic(() => import("../../components/forumPostReply"), { ssr: false });

const AddPostPage = props => {
  const { subId, id } = props;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Build ve ilk sunucu render aşamasında bileşenlerin çalışmasını tamamen engelliyoruz
  if (!isMounted) {
    return null;
  }

  if (subId)
    return <ForumThreadCreate id={subId} />;
  if (id)
    return <ForumPostReply id={id} />;

  return null;
}

export default AddPostPage;

export async function getServerSideProps(context) {
  try {
    const subId = context.query?.ForumID || null;
    const id = context.query?.PostID || null;

    return {
      props: {
        subId,
        id,
        title: 'Create/Reply Post - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        subId: null,
        id: null,
        title: 'Create/Reply Post - Eggs21',
      },
    };
  }
}
