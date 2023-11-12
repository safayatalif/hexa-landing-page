import React from 'react';
import { Button, Typography } from '../../../common';
import styles from './HomeCompleted.module.scss';

const HomeCompleted: React.FC = () => {
    return (
        <>
            <div className={styles.completedContainer}>
                <div className={styles.contentContainer}>
                    <Typography variant="title-xl-semibold" color="white">
                        Completed!
                    </Typography>
                    <Typography variant="text-xl-regular" color="grey">
                        Thank you for showing your interest in the beta launch.
                        We’ll get back to you shortly whenever appropriate.
                    </Typography>
                    <div className={styles.formContainer}>
                        <div className={styles.continueButtonDiv}>
                            <Button
                                styleType="outline"
                                className={styles.continueButton}
                                // onClick={handleLogin}
                            >
                                <Typography
                                    variant="text-md-semibold"
                                    color="white"
                                >
                                    Go back to Homepage
                                </Typography>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={styles.signUpContainer}>
            <Typography
                variant="text-md-semibold"
                color="white"
                alignment="center"
            >
                Sign up for Beta
            </Typography>
            <Typography
                variant="text-md-semibold"
                color="white"
                alignment="center"
            >
                Take an exclusive first look into the product
            </Typography>
            <Input
                inputType="text"
                required
                placeholder="Enter your full name"
            ></Input>
            <Input
                inputType="email"
                required
                placeholder="Enter your email"
            ></Input>
            <Button styleType="primary">Submit</Button>
        </div> */}
        </>
    );
};

export default HomeCompleted;
