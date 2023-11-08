import React from 'react';
import { HexaBetaLogo } from '../../assets';
import styles from './Navbar.module.scss';

export const Navbar: React.FC = () => {
    return (
        <div className={styles.navbarContainer}>
            <img src={HexaBetaLogo} alt="Hexa Beta Logo" />
        </div>
    );
};
