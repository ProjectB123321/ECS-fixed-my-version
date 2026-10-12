import dynamic from "next/dynamic";

// Sunucu tarafında hata vermemesi için dinamik import kullanıyoruz
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
  const subId = context.query?.ForumID || null;
  const id = context.query?.PostID || null;

  return {
    props: {
      subId,
      id,
    },
  };
}
