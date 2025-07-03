import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

type PathOrFn = string | (() => string);

const useNavigation = (): ((pathOrFn: PathOrFn) => void) => {
  const navigate = useNavigate();

  return (pathOrFn: PathOrFn) => {
    if (typeof pathOrFn === 'string') {
      navigate(pathOrFn);
    } else if (typeof pathOrFn === 'function') {
      navigate(pathOrFn());
    } else {
      console.error("Invalid argument passed to navigate function");
    }
  };
};

export default useNavigation;