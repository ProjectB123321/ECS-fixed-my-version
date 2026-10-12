import dynamic from "next/dynamic";
import React from "react";

const CatalogContent = dynamic(
  () => import("../../components/catalogContent"),
  { ssr: false }
);

const CatalogPage = () => {
  return <CatalogContent />;
};

export default CatalogPage;

export async function getServerSideProps() {
  try {
    return {
      props: {
        title: 'Catalog - ROBLOX',
      },
    };
  } catch (err) {
    return {
      props: {
        title: 'Catalog - ROBLOX',
      },
    };
  }
}
