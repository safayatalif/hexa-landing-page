import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '../../common';
import ContactNavbar from '../../components/ContactNavbar';
import styles from './ContactThank.module.scss';
export const ContactThank: React.FC = () => {
    return (
        <>
            <ContactNavbar></ContactNavbar>

            <div className={styles.thankContainer}>
                <Typography variant="title-lg-medium" alignment="center">
                    Thank you, appreciate it!
                </Typography>
                <div className={styles.buttonContainer}>
                    <Link to="/contact">
                        <Button
                            styleType="primary"
                            className={styles.continueButton}
                        >
                            <Typography
                                variant="text-md-semibold"
                                color="white"
                            >
                                Send another message
                            </Typography>
                        </Button>
                    </Link>
                    <Link to="/">
                        <Button
                            styleType="outlineBlack"
                            className={styles.backButton}
                        >
                            <Typography variant="text-md-semibold">
                                Go back to Homepage
                            </Typography>
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
};
