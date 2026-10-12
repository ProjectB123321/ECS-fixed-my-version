import dynamic from "next/dynamic";
import React from "react";

// Sunucu tarafında hata vermemesi için bileşeni dinamik olarak yüklüyoruz
const CreateUserAd = dynamic(() => import("../../components/createUserAd"), { ssr: false });

const CreateUserAdPage = props => {
  const { targetId, targetType } = props;

  return <CreateUserAd targetId={targetId} targetType={targetType} />;
}

export default CreateUserAdPage;

export async function getServerSideProps(context) {
  try {
    const targetId = context.query?.targetId || null;
    const targetType = context.query?.targetType || null;

    return {
      props: {
        targetId,
        targetType,
        title: 'Create Ad - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        targetId: null,
        targetType: null,
        title: 'Create Ad - Eggs21',
      },
    };
  }
}
