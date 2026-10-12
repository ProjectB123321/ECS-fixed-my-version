import dynamic from "next/dynamic";
import getFlag from "../lib/getFlag";

// Sunucu tarafında hata vermemesi için bileşeni dinamik olarak yüklüyoruz
const Download = dynamic(() => import("../components/download"), { ssr: false });

const DownloadPage = () => {
    if (!getFlag('downloadPageEnabled', false)) return null;
    return <Download />;
}

export default DownloadPage;

export async function getServerSideProps() {
  try {
    return {
      props: {
        title: 'Download - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        title: 'Download - Eggs21',
      },
    };
  }
}
