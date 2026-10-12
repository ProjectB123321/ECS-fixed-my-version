import ForumHome from "../../components/forumHome";

const DefaultPage = props => {
  return <ForumHome />
}

export default DefaultPage;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
