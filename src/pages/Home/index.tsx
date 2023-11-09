import React from 'react';
import { HomeBanner, Paper } from '../../components';
import CinematicVideo from '../../components/Home/CinematicVideo';
import { Moving } from '../../components/Home/Moving';

export const Home: React.FC = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <CinematicVideo></CinematicVideo>
            <Moving></Moving>
            <Paper></Paper>
        </div>
    );
};
