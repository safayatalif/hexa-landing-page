import React, { useState } from 'react';
// import { HexaBetaLogo } from '../../assets';
import Quantum from '../../../assets/home/Quantum.png';
import Velocity from '../../../assets/home/Velocity.png';
import trailerVideo from '../../../assets/video/cinematic.mp4';
import { Button, Input, Typography } from '../../../common';
import { VideoPlayer } from '../../VideoPlayer';
import styles from './HomeBanner.module.scss';

export const HomeBanner: React.FC = () => {
    const [isModalVisibleVideo, setModalVisibleVideo] = useState(false);
    const [isModalVisibleSignUp, setModalVisibleSignUp] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    const openModalVideo = () => {
        setModalVisibleVideo(true);
    };
    const openModalSignUp = () => {
        setModalVisibleSignUp(true);
    };

    const closeModalVideo = () => {
        setModalVisibleVideo(false);
    };

    const closeModalSignUp = () => {
        setModalVisibleSignUp(false);
        setIsSubmit(false);
    };

    return (
        <>
            <div className={styles.bannerContainer}>
                <div className={styles.dualBackground}>
                    <div className={styles.bannerLaptop}>
                        <div
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            className={styles.bannerHeading}
                        >
                            <Typography variant="title-2xl-semibold">
                                The most stylish learning <br /> experience.
                                Ever.
                            </Typography>
                            <Typography variant="text-xl-regular" color="white">
                                Making high school exam preparations fun,
                                delightful, and cinematic.
                            </Typography>
                        </div>
                        <div className={styles.bannerButtonContainer}>
                            <Button
                                styleType="primary"
                                className={styles.getButton}
                                onClick={openModalSignUp}
                            >
                                <Typography
                                    variant="text-md-semibold"
                                    color="white"
                                >
                                    Get Started
                                </Typography>
                            </Button>
                            <Button
                                styleType="outline"
                                className={styles.watchButton}
                                onClick={openModalVideo}
                            >
                                <Typography
                                    variant="text-md-semibold"
                                    color="white"
                                >
                                    Watch Physics trailer ▶︎
                                </Typography>
                            </Button>
                        </div>
                        <div className={styles.awardContainer}>
                            <img
                                data-aos="fade-left"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                className={styles.award}
                                src={Quantum}
                                alt=""
                            />
                            <img
                                data-aos="fade-right"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                className={styles.award}
                                src={Velocity}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.bannerBottomHeading}>
                    <Typography variant="title-3xl-semibold">
                        <span className={styles.heading1}>Learn</span>{' '}
                        <span className={styles.heading3}>and</span>{' '}
                        <span className={styles.heading2}>
                            Practice. <br />{' '}
                        </span>{' '}
                        <span className={styles.heading3}>
                            Two birds with one <br />{' '}
                        </span>{' '}
                        <span className={styles.heading4}>stone.</span>
                    </Typography>
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
            {isModalVisibleVideo && (
                <div className={`${styles.modal} ${styles.visible}`}>
                    <div className={styles.modalContainer}>
                        <div className={styles.videoContainer}>
                            <VideoPlayer
                                localClassName={styles.modalVideo}
                                overlayText="Play Video"
                                url={trailerVideo}
                            ></VideoPlayer>
                        </div>

                        <button
                            className={styles.closeBtn}
                            onClick={closeModalVideo}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
