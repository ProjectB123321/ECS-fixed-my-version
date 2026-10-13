import React, { useState, useEffect } from "react";
import Theme2016 from "./theme2016";
import GroupAudit from "./groupAudit";

export default function GroupAuditContent({ groupId }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Theme2016>
      <GroupAudit groupId={groupId} />
    </Theme2016>
  );
}
