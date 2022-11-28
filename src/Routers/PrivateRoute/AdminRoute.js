import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../../Context/SharedContext";
import useAdmin from "../../Hooks/useAdmin";


const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(authContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
