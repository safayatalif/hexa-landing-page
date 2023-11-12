import React, { useState } from 'react';
// import { HexaBetaLogo } from '../../assets';
import Quantum from '../../../assets/home/Quantum.png';
import Velocity from '../../../assets/home/Velocity.png';
// import trailerVideo from '../../../assets/video/cinematic.mp4';
import { Button, Typography } from '../../../common';
import { VideoPlayer } from '../../VideoPlayer';
import HomeSignUp from '../HomeSignUp';
import styles from './HomeBanner.module.scss';

export const HomeBanner: React.FC = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalType, setModalType] = useState('');

    const openModal = (modalType: string) => {
        setModalVisible(true);
        setModalType(modalType);
    };

    const closeModal = () => {
        setModalVisible(false);
        setModalType('');
    };

    return (
        <>
            <div className={styles.bannerContainer}>
                <div className={styles.bannerLaptop}></div>
                <div className={styles.dualBackground}>
                    <div className={styles.bannerHeading}>
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
                            onClick={() => openModal('signUp')}
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
                            onClick={() => openModal('video')}
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
                        <img className={styles.award} src={Quantum} alt="" />
                        <img className={styles.award} src={Velocity} alt="" />
                    </div>
                    <div className={styles.bannerBottomHeading}>
                        <Typography variant="title-2xl-semibold">
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
            {isModalVisible && (
                <div
                    className={`${styles.modal} ${styles.visible}`}
                    onClick={closeModal}
                >
                    <div className={styles.modalContainer}>
                        {isModalType === 'video' && (
                            <div className={styles.videoContainer}>
                                <VideoPlayer
                                    overlayText="Play Video"
                                    url={
                                        'https://youtu.be/MWOlnZSnXJo?si=w-cl2SjNbJNcVdtj'
                                    }
                                ></VideoPlayer>
                            </div>
                        )}

                        {isModalType === 'signUp' && <HomeSignUp></HomeSignUp>}
                        <button
                            className={styles.closeBtn}
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
