import dynamic from "next/dynamic";

// Sunucu tarafında hata vermemesi için dinamik import kullanıyoruz
const ForumSubcategory = dynamic(() => import("../../components/forumSubcategory"), { ssr: false });

const ShowForumPage = props => {
  const { forumId, page } = props;
  
  if (!forumId)
    return null;

  return <ForumSubcategory id={forumId} page={page} />;
}

export default ShowForumPage;

export async function getServerSideProps(context) {
  const forumId = context.query?.ForumID || null;
  const rawPage = parseInt(context.query?.Page, 10);
  const page = Number.isInteger(rawPage) && rawPage > 0 ? rawPage : 1;

  return {
    props: {
      forumId,
      page,
    },
  };
}
