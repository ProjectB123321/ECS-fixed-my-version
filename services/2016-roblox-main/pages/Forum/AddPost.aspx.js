import dynamic from "next/dynamic";
import React from "react";

// Sunucu tarafında hata vermemesi için bileşenleri dinamik olarak yüklüyoruz
const ForumThreadCreate = dynamic(() => import("../../components/forumThreadCreate"), { ssr: false });
const ForumPostReply = dynamic(() => import("../../components/forumPostReply"), { ssr: false });

const AddPostPage = props => {
  const { subId, id } = props;

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
