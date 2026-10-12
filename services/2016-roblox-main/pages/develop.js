import dynamic from "next/dynamic";
import t from "../lib/t";

// Sunucu tarafında hata vermemesi için bileşeni dinamik olarak yüklüyoruz
const Develop = dynamic(() => import("../components/develop"), { ssr: false });

const DevelopPage = props => {
  const { id } = props;

  return <Develop id={id} />;
}

export default DevelopPage;

export async function getServerSideProps(context) {
  try {
    const viewQuery = t.string(context.query?.View);
    const id = parseInt(viewQuery, 10) || 0;

    return {
      props: {
        id,
        title: 'Develop - ROBLOX',
      },
    };
  } catch (err) {
    return {
      props: {
        id: 0,
        title: 'Develop - ROBLOX',
      },
    };
  }
}
