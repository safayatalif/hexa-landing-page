import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HexaBetaLogo } from '../../assets';
import { Button, Typography } from '../../common';
import styles from './HomeNavbar.module.scss';

const HomeNavbar: React.FC = () => {
    const [isNavActive, setNavActive] = useState(false);

    const toggleNavbar = () => {
        setNavActive(!isNavActive);
    };

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector(
                `.${styles.navbarContainerMain}`
            );
            if (navbar && window.scrollY > 1550) {
                navbar.classList.add(styles.scrolled);
            } else if (navbar) {
                navbar.classList.remove(styles.scrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`${styles.navbarContainerMain} ${
                isNavActive ? styles.active : ''
            }`}
        >
            <div className={styles.navbarContainer}>
                <div>
                    <Link className={styles.hexaBetaLogo} to="/">
                        <img src={HexaBetaLogo} alt="Hexa Beta Logo" />
                    </Link>
                </div>
                <div>
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
                    <div className={styles.dropdownContainer}>
                        <div
                            className={styles.dropdownTrigger}
                            onClick={toggleNavbar}
                        >
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
            </div>
        </div>
    );
};

export default HomeNavbar;
