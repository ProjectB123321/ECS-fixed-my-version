import dynamic from "next/dynamic";
import Theme2016 from "../../components/theme2016";
import GamesPageStore from "../../stores/gamesPage";

// Sunucu tarafında hata vermemesi için SSR'ı kapatıyoruz
const Games = dynamic(() => import("../../components/gamesPage"), { ssr: false });

const GamesPage = props => {
  return <Theme2016>
    <GamesPageStore.Provider>
      <Games/>
    </GamesPageStore.Provider>
  </Theme2016>
}

export default GamesPage;

export async function getServerSideProps() {
  return {
    props: {
      title: 'Games - Eggs21',
    },
  };
}
