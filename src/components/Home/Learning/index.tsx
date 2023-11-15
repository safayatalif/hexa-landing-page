import React, { useState } from 'react';
import OneStep from '../../../assets/home/OneStop.png';
import { Button, Input, Typography } from '../../../common';
import styles from './Learning.module.scss';

export const Learning: React.FC = () => {
    const [isModalVisibleSignUp, setModalVisibleSignUp] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    const openModalSignUp = () => {
        setModalVisibleSignUp(true);
    };

    const closeModalSignUp = () => {
        setModalVisibleSignUp(false);
        setIsSubmit(false);
    };

    return (
        <div>
            <img
                data-aos="zoom-in-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                className={styles.oneStepImage}
                src={OneStep}
                alt=""
            />
            <div className={styles.learnContainer}>
                <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                >
                    <Typography variant="title-3xl-semibold" alignment="left">
                        Education with absolute delight.
                    </Typography>
                </div>
                <div
                    data-aos="zoom-in-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    className={styles.learnImageBox}
                >
                    <Typography
                        variant="title-sm-medium"
                        alignment="center"
                        color="white"
                    >
                        Get a headstart in your exam preparations. Now.
                    </Typography>
                    <div className={styles.buttonContainer}>
                        <Button
                            onClick={openModalSignUp}
                            styleType="outline"
                            className={styles.joinButton}
                        >
                            <Typography
                                variant="text-md-semibold"
                                color="white"
                                alignment="center"
                            >
                                Join Beta
                            </Typography>
                        </Button>
                    </div>
                </div>
            </div>

            {isModalVisibleSignUp && (
                <div className={`${styles.modal} ${styles.visible}`}>
                    <div className={styles.modalContainer}>
                        {isSubmit ? (
                            <div className={styles.completedContainer}>
                                <div className={styles.contentContainer}>
                                    <Typography
                                        variant="title-xl-semibold"
                                        color="white"
                                    >
                                        Completed!
                                    </Typography>
                                    <Typography
                                        variant="text-xl-regular"
                                        color="grey"
                                    >
                                        Thank you for showing your interest in
                                        the beta launch. We’ll get back to you
                                        shortly whenever appropriate.
                                    </Typography>
                                    <div className={styles.formContainer}>
                                        <div
                                            className={styles.continueButtonDiv}
                                        >
                                            <Button
                                                onClick={closeModalSignUp}
                                                styleType="outline"
                                                className={
                                                    styles.continueButton
                                                }
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
                        ) : (
                            <div className={styles.homeSignUpContainer}>
                                <div className={styles.contentContainer}>
                                    <Typography
                                        variant="title-xl-semibold"
                                        color="white"
                                    >
                                        Sign up for Beta
                                    </Typography>
                                    <Typography
                                        variant="text-xl-regular"
                                        color="grey"
                                    >
                                        Take an exclusive first look into the
                                        product
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

                                        <div
                                            className={styles.continueButtonDiv}
                                        >
                                            <Button
                                                onClick={() =>
                                                    setIsSubmit(true)
                                                }
                                                styleType="primary"
                                                className={
                                                    styles.continueButton
                                                }
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
                        )}
                        <button
                            className={styles.closeBtn}
                            onClick={closeModalSignUp}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
