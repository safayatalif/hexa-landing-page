import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import HomeNavbar from '../HomeNavbar';

export const Layout: React.FC = () => {
    return (
        <>
            <HomeNavbar />
            <Outlet />
            <Footer />
        </>
    );
};
