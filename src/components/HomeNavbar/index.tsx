import React from 'react';
import { HexaBetaLogo } from '../../assets';
import { Button, Typography } from '../../common';
import styles from './HomeNavbar.module.scss';

const HomeNavbar: React.FC = () => {
    return (
        <div className={styles.navbarContainer}>
            <img src={HexaBetaLogo} alt="Hexa Beta Logo" />
            <div className="navLinkContainer">
                <a className={styles.navLink} href="/">
                    Home
                </a>
                <a className={styles.navLink} href="/about">
                    About
                </a>
                <a className={styles.navLink} href="/contact">
                    Contact
                </a>
                <Button styleType="primary" className={styles.continueButton}>
                    <Typography variant="text-md-semibold" color="white">
                        Join Beta
                    </Typography>
                </Button>
            </div>
        </div>
    );
};

export default HomeNavbar;
