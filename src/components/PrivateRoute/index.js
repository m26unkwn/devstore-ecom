import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/auth/auth-context";

const PrivateRoute = ({ children }) => {
  const {
    authState: { token },
  } = useAuth();

  const location = useLocation();

  return token ? (
    children
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};

export default PrivateRoute;
