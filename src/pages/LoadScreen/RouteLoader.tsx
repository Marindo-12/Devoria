import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

export function RouteLoader({ children } : any) {
  const location = useLocation();
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isFirstLoad) {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
        setIsFirstLoad(false);
      }, 6000); 

      return () => clearTimeout(timer);
    }
  }, [location.pathname, isFirstLoad]);

  if (loading) return <LoadingScreen />;

  return children;
}
