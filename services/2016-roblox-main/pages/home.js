import dynamic from "next/dynamic";
import React from "react";
import Theme2016 from "../components/theme2016";
import DashboardStore from "../components/myDashboard/stores/dashboardStore";

// Sunucu tarafında (SSR) hata vermemesi için MyDashboard bileşenini dinamik yüklüyoruz
const MyDashboard = dynamic(() => import("../components/myDashboard"), { ssr: false });

export default function AuthenticatedHomePage() {
  return (
    <Theme2016>
      <DashboardStore.Provider>
        <MyDashboard />
      </DashboardStore.Provider>
    </Theme2016>
  );
}

export async function getServerSideProps() {
  try {
    return {
      props: {
        title: 'Home - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        title: 'Home - Eggs21',
      },
    };
  }
}
