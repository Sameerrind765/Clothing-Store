import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  behave?: ScrollBehavior;
}

const ScrollToTop = ({ behave = "smooth" }: Props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: behave });
  }, [pathname, behave]);

  return null;
};

export default ScrollToTop;