import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

const ForumHome = dynamic(() => import("../../components/forumHome"), { ssr: false });

const DefaultPage = props => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <ForumHome />;
}

export default DefaultPage;

export async function getServerSideProps() {
  try {
    return {
      props: {
        title: 'Forums - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        title: 'Forums - Eggs21',
      },
    };
  }
}
