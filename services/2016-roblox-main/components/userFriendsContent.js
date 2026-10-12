import React from "react";
import Theme2016 from "./theme2016";
import UserFriends from "./userFriends";
import UserFriendsStore from "./userFriends/stores/userFriendsStore";

export default function UserFriendsPageContent({ userId }) {
  return (
    <Theme2016>
      <UserFriendsStore.Provider>
        <UserFriends userId={userId} />
      </UserFriendsStore.Provider>
    </Theme2016>
  );
}
