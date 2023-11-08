import Cookies from 'js-cookie';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectCurrentUser } from './authSlice';

export const RequireAuth: React.FC = () => {
    const user = useSelector(selectCurrentUser);
    console.log(user);
    const location = useLocation();
    const token = Cookies.get('jwt');
    console.log(token);
    console.log(user?.accessToken === token);

    return token && user?.accessToken === token ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};
