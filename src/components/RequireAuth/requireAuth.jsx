import { Navigate } from "react-router-dom";
import { useAuth } from "./../../store/authContext";

const RequireAuth = ({ children }) => {
  const { userId } = useAuth();

  if (!userId) {
    return <Navigate to="/auth" />;
  }

  return children;
};

export default RequireAuth;
