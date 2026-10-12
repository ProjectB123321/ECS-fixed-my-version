import dynamic from "next/dynamic";

// Sunucu tarafında hata vermemesi için dinamik import kullanıyoruz
const Login = dynamic(() => import("../components/loginPage"), { ssr: false });

const LoginPage = () => {
    return <Login></Login>;
}

export default LoginPage;

export async function getServerSideProps() {
  return {
    props: {
      title: 'Login - Eggs21',
    },
  };
}
