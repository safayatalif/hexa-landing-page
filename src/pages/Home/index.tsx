import React from 'react';
import { HomeBanner, Learning, Paper } from '../../components';
import CinematicVideo from '../../components/Home/CinematicVideo';
import { Moving } from '../../components/Home/Moving';
import HomeNavbar from '../../components/HomeNavbar';

export const Home: React.FC = () => {
    return (
        <div>
            <HomeNavbar></HomeNavbar>
            <HomeBanner></HomeBanner>
            <CinematicVideo></CinematicVideo>
            <Moving></Moving>
            <Paper></Paper>
            <Learning></Learning>
        </div>
    );
};
