//importing the necessary hooks from React and ReactDOM
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//auto top page component
//this function allows you to enter a new page always at the top
export default function AutoTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
