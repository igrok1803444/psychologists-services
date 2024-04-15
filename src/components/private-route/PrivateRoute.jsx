import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoading, selectIsLoggedIn } from "redux/auth/selectors";

export const PrivateRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);

  const haveAccess = isLoading === false && isLoggedIn === false;
  console.log(isLoading === false && isLoggedIn === false);

  return haveAccess ? <Navigate to={"/"} /> : Component;
};
