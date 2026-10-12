import dynamic from "next/dynamic";

// Sunucu tarafında (SSR) hata vermemesi için dinamik import kullanıyoruz
const ForumHome = dynamic(() => import("../../components/forumHome"), { ssr: false });

const DefaultPage = props => {
  return <ForumHome />;
}

export default DefaultPage;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
