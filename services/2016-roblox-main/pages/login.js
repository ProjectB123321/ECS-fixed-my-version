import dynamic from "next/dynamic";
import React from "react";

// Sunucu tarafında hata vermemesi için dinamik import kullanıyoruz
const Login = dynamic(() => import("../components/loginPage"), { ssr: false });

const LoginPage = () => {
    return <Login />;
}

export default LoginPage;

export async function getServerSideProps() {
  try {
    return {
      props: {
        title: 'Login - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        title: 'Login - Eggs21',
      },
    };
  }
}
