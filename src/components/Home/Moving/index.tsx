import React from 'react';
import Container from '../../../assets/home/Container.png';
import Tabs from '../../../assets/home/Tabs.png';
import lessTabs from '../../../assets/home/lessTabs.png';
import moving from '../../../assets/home/moving.png';
import writing from '../../../assets/home/writing.png';
import { Typography } from '../../../common';
import TopicalVideo from '../TopicalVideo';
import styles from './Moving.module.scss';

export const Moving: React.FC = () => {
    return (
        <>
            <div className={styles.movingContainer}>
                <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    className={styles.heading}
                >
                    <Typography variant="title-2xl-semibold" alignment="center">
                        <span className={styles.heading1}>Moving async.</span>{' '}
                        <br />{' '}
                        <span className={styles.heading2}>
                            At your own pace.
                        </span>
                    </Typography>
                </div>
                <div className={styles.movingBoxContainer}>
                    <div
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        className={styles.movingBox1}
                    >
                        <Typography variant="title-md-semibold">
                            Complimentary notes with each video.
                        </Typography>
                        <Typography variant="title-xs-medium">
                            Details and summaries - enjoy both with the notes
                            provided.
                        </Typography>
                        <img
                            className={styles.movingBoxImage}
                            src={moving}
                            alt=""
                        />
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        className={styles.movingBox2}
                    >
                        <img
                            className={styles.movingBoxImage2}
                            src={Container}
                            alt=""
                        />
                        <div className={styles.boxTwoText}>
                            <Typography variant="title-md-semibold">
                                MCQs for each lesson.
                            </Typography>
                            <Typography variant="title-xs-medium">
                                Interactiveness - personified.
                            </Typography>
                        </div>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    className={styles.biteBox}
                >
                    <img className={styles.writingImage} src={writing} alt="" />
                </div>

                <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                >
                    <Typography variant="text-xl-regular" alignment="center">
                        The goal, always, is to try and ensure that you have
                        access to as many resources as possible, without having
                        to open another tab, or another website. Which swiftly
                        takes us to the Practice section.
                    </Typography>
                </div>

                <div
                    data-aos="flip-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    className={styles.tabsImageContainer}
                >
                    <img className={styles.tabsImage} src={Tabs} alt="" />
                    <img
                        className={styles.lessTabsImage}
                        src={lessTabs}
                        alt=""
                    />
                </div>
            </div>
            <TopicalVideo></TopicalVideo>
        </>
    );
};
