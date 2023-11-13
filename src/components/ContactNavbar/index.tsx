import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HexaBetaLogo } from '../../assets';
import { Button, Typography } from '../../common';
import styles from './ContactNavbar.module.scss';

const ContactNavbar: React.FC = () => {
    const [isNavActive, setNavActive] = useState(false);

    const toggleNavbar = () => {
        setNavActive(!isNavActive);
    };

    return (
        <div
            className={`${styles.navbarContainer} ${
                isNavActive ? styles.active : ''
            }`}
        >
            <Link className={styles.hexaBetaLogo} to="/">
                <img src={HexaBetaLogo} alt="Hexa Beta Logo" />
            </Link>
            <div className={styles.navLinkContainer}>
                <Link className={styles.navLink} to="/about">
                    About
                </Link>
                <Link className={styles.navLink} to="/contact">
                    Contact
                </Link>
                {/* <Button styleType="outline" className={styles.loginButton}>
                    <Typography variant="text-md-semibold">Login</Typography>
                </Button>
                <Button styleType="primary" className={styles.continueButton}>
                    <Typography variant="text-md-semibold" color="white">
                        Create an account
                    </Typography>
                </Button> */}
                <Button styleType="primary" className={styles.continueButton}>
                    <Typography variant="text-md-semibold" color="white">
                        Join Beta
                    </Typography>
                </Button>
            </div>
            <div className={styles.dropdownContainer}>
                <div className={styles.dropdownTrigger} onClick={toggleNavbar}>
                    {isNavActive ? 'X' : '☰'}
                    <div
                        className={`${styles.dropdown} ${
                            isNavActive ? styles.open : ''
                        }`}
                    >
                        <Link className={styles.navLink} to="/about">
                            About
                        </Link>
                        <Link className={styles.navLink} to="/contact">
                            Contact
                        </Link>
                        {/* <Button
                            styleType="outline"
                            className={styles.loginButton}
                        >
                            <Typography variant="text-md-semibold">
                                Login
                            </Typography>
                        </Button>
                        <Button
                            styleType="primary"
                            className={styles.continueButton}
                        >
                            <Typography
                                variant="text-md-semibold"
                                color="white"
                            >
                                Create an account
                            </Typography>
                        </Button> */}
                        <Button
                            styleType="primary"
                            className={styles.continueButton}
                        >
                            <Typography
                                variant="text-md-semibold"
                                color="white"
                            >
                                Join Beta
                            </Typography>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactNavbar;
