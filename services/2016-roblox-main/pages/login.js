import Login from "../components/loginPage";

const LoginPage = () => {
    return <Login></Login>
}

export default LoginPage;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
