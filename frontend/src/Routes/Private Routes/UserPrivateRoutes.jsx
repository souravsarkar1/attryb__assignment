
import React from "react";
import { useSelector } from 'react-redux'

import { Navigate, useLocation } from 'react-router-dom'
const UserPrivateRoute = ({ children }) => {
    const isAuth = useSelector(st => st.userAuthReducer.isAuth);
    const location = useLocation();
    if (!isAuth) {
        return <Navigate state={location.pathname} to={'/login'} />
    }
    return children;
};
export default UserPrivateRoute;