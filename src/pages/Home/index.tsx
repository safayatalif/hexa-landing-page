import React, { useState } from 'react';
import { HomeBanner, Learning, Paper } from '../../components';
import CinematicVideo from '../../components/Home/CinematicVideo';
import IntroOverlay from '../../components/Home/IntroOverlay'; // Adjust the import path
import { Moving } from '../../components/Home/Moving';
import HomeNavbar from '../../components/HomeNavbar';
import styles from './Home.module.scss';

export const Home: React.FC = () => {
    const [showIntro, setShowIntro] = useState<boolean>(true);

    const handleIntroComplete = () => {
        setShowIntro(false);
    };

    return (
        <div className={styles.homeContainer}>
            {showIntro && <IntroOverlay onComplete={handleIntroComplete} />}
            <HomeNavbar></HomeNavbar>
            <HomeBanner></HomeBanner>
            <CinematicVideo></CinematicVideo>
            <Moving></Moving>
            <Paper></Paper>
            <Learning></Learning>
        </div>
    );
};
