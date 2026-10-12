import { useEffect, useState } from "react";
import AuthenticationStore from "../stores/authentication";

const IndexPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <IndexContent />;
};

function IndexContent() {
  const auth = AuthenticationStore.useContainer();
  
  useEffect(() => {
    if (auth.isAuthenticated) {
      window.location.href = '/home';
    }
  }, [auth.isAuthenticated]);

  return null;
}

export default IndexPage;

export async function getServerSideProps() {
  return {
    props: {
      title: 'Home - Eggs21',
    },
  };
}
