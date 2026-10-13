import React, { useState, useEffect } from "react";
import MyAccount from "./myAccount2016";
import MyAccountStore from "./myAccount2016/stores/myAccountStore";
import Theme2016 from "./theme2016";
import getFlag from "../lib/getFlag";

export default function MyAccountContent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  if (getFlag('myAccountPage2016Enabled', false)) {
    return (
      <Theme2016>
        <MyAccountStore.Provider>
          <MyAccount />
        </MyAccountStore.Provider>
      </Theme2016>
    );
  }
  
  return <p className='text-center'>Flag myAccountPage2016Enabled is false, but the old settings page is not implemented.</p>;
}
