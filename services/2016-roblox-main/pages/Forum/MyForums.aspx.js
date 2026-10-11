import MyForums from "../../components/myForums";
import authentication from "../../stores/authentication";

const MyForumsPage = props => {
  return <MyForums />
}

export default MyForumsPage;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
