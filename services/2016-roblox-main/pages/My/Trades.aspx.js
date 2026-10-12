import dynamic from "next/dynamic";
import React from "react";
import MoneyPageStore from "../../components/myMoney/stores/moneyPageStore";
import TradeStore from "../../components/myMoney/stores/tradeStore";

// Sunucu tarafında hata vermemesi için bileşeni dinamik olarak yüklüyoruz
const MyMoney = dynamic(() => import("../../components/myMoney"), { ssr: false });

const MyTradesPage = props => {
  return (
    <MoneyPageStore.Provider>
      <TradeStore.Provider>
        <MyMoney type='Trade Items' />
      </TradeStore.Provider>
    </MoneyPageStore.Provider>
  );
}

export default MyTradesPage;

export async function getServerSideProps() {
  try {
    return {
      props: {
        title: 'Trade Items - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        title: 'Trade Items - Eggs21',
      },
    };
  }
}
