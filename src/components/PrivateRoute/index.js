import { Navigate } from "react-router-dom";
import { useAuth } from "../../Context/auth/auth-context";

const PrivateRoute = ({ children }) => {
  const {
    authState: { token },
  } = useAuth();
  return token ? children : <Navigate to='/login' />;
};

export default PrivateRoute;
