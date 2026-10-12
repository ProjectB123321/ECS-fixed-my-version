import dynamic from "next/dynamic";
import React from "react";
import MoneyPageStore from "../../components/myMoney/stores/moneyPageStore";

// Sunucu tarafında hata vermemesi için bileşeni dinamik olarak yüklüyoruz
const MyMoney = dynamic(() => import("../../components/myMoney"), { ssr: false });

const MyMoneyPage = props => {
  return (
    <MoneyPageStore.Provider>
      <MyMoney type='My Transactions' />
    </MoneyPageStore.Provider>
  );
}

export default MyMoneyPage;

export async function getServerSideProps() {
  try {
    return {
      props: {
        title: 'My Transactions - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        title: 'My Transactions - Eggs21',
      },
    };
  }
}
