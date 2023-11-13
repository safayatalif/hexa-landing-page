import React, { useState } from 'react';
// import { HexaBetaLogo } from '../../assets';
import Quantum from '../../../assets/home/Quantum.png';
import Velocity from '../../../assets/home/Velocity.png';
import trailerVideo from '../../../assets/video/cinematic.mp4';
import { Button, Typography } from '../../../common';
import { VideoPlayer } from '../../VideoPlayer';
import HomeSignUp from '../HomeSignUp';
import styles from './HomeBanner.module.scss';

export const HomeBanner: React.FC = () => {
    const [isModalVisibleVideo, setModalVisibleVideo] = useState(false);
    const [isModalVisibleSignUp, setModalVisibleSignUp] = useState(false);

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
    };

    return (
        <>
            <div className={styles.bannerContainer}>
                <div className={styles.bannerLaptop}></div>
                <div className={styles.dualBackground}>
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
                            The most stylish learning <br /> experience. Ever.
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
                    <div
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        className={styles.bannerBottomHeading}
                    >
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
            </div>
            {isModalVisibleSignUp && (
                <div
                    className={`${styles.modal} ${styles.visible}`}
                    onClick={closeModalSignUp}
                >
                    <div className={styles.modalContainer}>
                        <HomeSignUp></HomeSignUp>
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
                <div
                    className={`${styles.modal} ${styles.visible}`}
                    onClick={closeModalVideo}
                >
                    <div className={styles.modalContainer}>
                        <VideoPlayer
                            overlayText="Play Video"
                            url={trailerVideo}
                        ></VideoPlayer>

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
