import dynamic from "next/dynamic";
import { getRepliesToThread } from "../../services/forums";

const limit = 15;

// Sunucu tarafında hata vermemesi için dinamik import kullanıyoruz
const ForumThread = dynamic(() => import("../../components/forumThread"), { ssr: false });

const ShowPostPage = props => {
  if (!props.id)
    return null;
    
  return <ForumThread id={props.id} page={props.page} posts={props.posts} />;
}

export default ShowPostPage;

export async function getServerSideProps(context) {
  let id = parseInt(context.query?.PostID, 10);
  let pageNumber = parseInt(context.query?.Page, 10);
  
  if (!Number.isInteger(pageNumber) || pageNumber < 1) {
    pageNumber = 1;
  }

  // Build aşamasında PostID henüz olamayacağı için uygulamanın çökmesini önlüyoruz
  if (!Number.isInteger(id) || id < 1) {
    return {
      props: {
        id: null,
        page: 1,
        posts: [],
        title: 'View Post - Eggs21',
      },
    };
  }

  try {
    const replies = await getRepliesToThread({
      threadId: id,
      limit: limit,
      cursor: ((pageNumber * limit) - limit).toString(),
    });

    return {
      props: {
        id,
        page: pageNumber,
        posts: replies || [],
        title: 'View Post - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        id,
        page: pageNumber,
        posts: [],
        title: 'View Post - Eggs21',
      },
    };
  }
}
