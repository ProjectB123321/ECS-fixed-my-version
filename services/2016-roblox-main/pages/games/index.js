import Games from "../../components/gamesPage"
import Theme2016 from "../../components/theme2016";
import GamesPageStore from "../../stores/gamesPage";

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
