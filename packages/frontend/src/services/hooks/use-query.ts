import React from "react";
import { useLocation } from "react-router-dom";

export function useQuery(): URLSearchParams {
  const location = useLocation();
  return React.useMemo(() => new URLSearchParams(location.search), [location]);
}
