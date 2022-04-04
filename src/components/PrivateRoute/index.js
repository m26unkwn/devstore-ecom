import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Context";

const PrivateRoute = ({ children }) => {
  const {
    authState: { token },
  } = useAuth();

  const location = useLocation();

  return token ? (
    children
  ) : (
    <Navigate to='/login' state={{ lastLocation: location }} replace />
  );
};

export default PrivateRoute;
