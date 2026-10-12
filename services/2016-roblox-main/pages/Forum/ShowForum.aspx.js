import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Sunucu tarafında hata vermemesi için dinamik import kullanıyoruz
const ForumSubcategory = dynamic(() => import("../../components/forumSubcategory"), { ssr: false });

const ShowForumPage = props => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Build sırasında sunucuda hata oluşmaması için ilk başta boş döndürüyoruz
  if (!mounted) {
    return null;
  }

  const { forumId, page } = props;
  
  if (!forumId)
    return null;

  return <ForumSubcategory id={forumId} page={page} />;
}

export default ShowForumPage;

export async function getServerSideProps(context) {
  try {
    const forumId = context.query?.ForumID || null;
    const rawPage = parseInt(context.query?.Page, 10);
    const page = Number.isInteger(rawPage) && rawPage > 0 ? rawPage : 1;

    return {
      props: {
        forumId,
        page,
      },
    };
  } catch (err) {
    return {
      props: {
        forumId: null,
        page: 1,
      },
    };
  }
}
