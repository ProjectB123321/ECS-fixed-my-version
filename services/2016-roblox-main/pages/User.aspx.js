import React, { useEffect } from "react";
import { useRouter } from "next/router";

const UserPage = () => {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('ID') || params.get('id');

    if (userId) {
      router.replace(`/users/${userId}/profile`);
    } else {
      router.replace('/home');
    }
  }, [router]);

  return null;
}

export default UserPage;

export async function getServerSideProps() {
  try {
    return {
      props: {},
    };
  } catch (err) {
    return {
      props: {},
    };
  }
}
