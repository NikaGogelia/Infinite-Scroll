import { useState, useEffect, useCallback } from "react";

function usePage() {
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(true);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setLoader(false);
      setTimeout(() => setPage(page + 1), 1000);
    } else {
      setLoader(true);
    }
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { page, loader };
}

export { usePage };
