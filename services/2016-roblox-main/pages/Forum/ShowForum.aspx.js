import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

// Sunucu tarafında hata vermemesi için dinamik import kullanıyoruz
const ForumSubcategory = dynamic(() => import("../../components/forumSubcategory"), { ssr: false });

const ShowForumPage = props => {
  const { forumId, page } = props;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

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
        title: 'Forum - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        forumId: null,
        page: 1,
        title: 'Forum - Eggs21',
      },
    };
  }
}
