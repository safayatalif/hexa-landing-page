import React from 'react';
import { Button, Input, Typography } from '../../../common';
import styles from './HomeSignUp.module.scss';

const HomeSignUp: React.FC = () => {
    return (
        <>
            <div className={styles.homeSignUpContainer}>
                <div className={styles.contentContainer}>
                    <Typography variant="title-xl-semibold" color="white">
                        Sign up for Beta
                    </Typography>
                    <Typography variant="text-xl-regular" color="grey">
                        Take an exclusive first look into the product
                    </Typography>
                    <div className={styles.formContainer}>
                        <Input
                            inputType="text"
                            required={true}
                            placeholder="Enter your full name"
                            inputClassname={styles.nameInput}
                            // onChange={handleEmailInput}
                        />
                        <Input
                            inputType="email"
                            required={true}
                            placeholder="Enter your email"
                            inputClassname={styles.emailInput}
                            // onChange={handleEmailInput}
                        />

                        <div className={styles.continueButtonDiv}>
                            <Button
                                styleType="primary"
                                className={styles.continueButton}
                                // onClick={handleLogin}
                            >
                                <Typography
                                    variant="text-md-semibold"
                                    color="white"
                                >
                                    Submit
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

export default HomeSignUp;
