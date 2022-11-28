import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../Context/SharedContext';

const PrivateRoute = ({children}) => {
   const location = useLocation()
   const {user,loading} = useContext(authContext)
   if (loading) {
     return <progress className="progress w-56"></progress>;
   }

   if (user) {
     return children;
   }
   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;