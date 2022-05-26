import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../Context";

const PrivateRoute = () => {
  const {
    authState: { token },
  } = useAuth();

  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ lastLocation: location }} replace />
  );
};

export default PrivateRoute;
