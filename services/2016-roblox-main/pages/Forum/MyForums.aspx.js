import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

const MyForums = dynamic(() => import("../../components/myForums"), { ssr: false });

const MyForumsPage = props => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <MyForums />;
}

export default MyForumsPage;

export async function getServerSideProps() {
  try {
    return {
      props: {
        title: 'My Forums - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        title: 'My Forums - Eggs21',
      },
    };
  }
}
