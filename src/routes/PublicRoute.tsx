
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PublicRoute = () => {
  const { isAuthenticated } = useAuth();
  
  return isAuthenticated ? <Navigate to="/table" replace /> : <Outlet />;
};

export default PublicRoute;
