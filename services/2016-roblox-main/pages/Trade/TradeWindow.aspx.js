import dynamic from "next/dynamic";
import TradeWindowStore from "../../components/tradeWindow/stores/tradeWindowStore";

// Sunucu tarafında hata vermemesi için dinamik import kullanıyoruz
const TradeWindow = dynamic(() => import("../../components/tradeWindow"), { ssr: false });

const TradeWindowPage = props => {
  return (
    <TradeWindowStore.Provider>
      <TradeWindow />
    </TradeWindowStore.Provider>
  );
}

export default TradeWindowPage;

export async function getServerSideProps() {
  return {
    props: {
      title: 'Trade - Eggs21',
    },
  };
}
