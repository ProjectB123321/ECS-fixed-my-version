import React from "react";
import Theme2016 from "./theme2016";
import GroupAudit from "./groupAudit";

export default function GroupAuditContent({ groupId }) {
  return (
    <Theme2016>
      <GroupAudit groupId={groupId} />
    </Theme2016>
  );
}
