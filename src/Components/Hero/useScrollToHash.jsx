import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollToHash() {
  const { hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      // Remove the '#' and find the element by id
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
}

export default useScrollToHash;
