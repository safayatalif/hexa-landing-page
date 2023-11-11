import React from 'react';
import Container from '../../../assets/home/Container.png';
import Tabs from '../../../assets/home/Tabs.png';
import moving from '../../../assets/home/moving.png';
import writing from '../../../assets/home/writing.png';
import { Typography } from '../../../common';
import TopicalVideo from '../TopicalVideo';
import styles from './Moving.module.scss';

export const Moving: React.FC = () => {
    return (
        <>
            <div className={styles.movingContainer}>
                <div className={styles.heading}>
                    <Typography variant="title-2xl-semibold">
                        <span className={styles.heading1}>Moving async.</span>{' '}
                        <br />{' '}
                        <span className={styles.heading2}>
                            At your own pace.
                        </span>
                    </Typography>
                </div>
                <div className={styles.movingBoxContainer}>
                    <div className={styles.movingBox1}>
                        <Typography variant="title-md-medium">
                            Complimentary notes with each video.
                        </Typography>
                        <Typography variant="text-xl-regular">
                            Details and summaries - enjoy both with the notes
                            provided.
                        </Typography>
                        <img
                            className={styles.movingBoxImage}
                            src={moving}
                            alt=""
                        />
                    </div>
                    <div className={styles.movingBox2}>
                        <img
                            className={styles.movingBoxImage2}
                            src={Container}
                            alt=""
                        />
                        <div className={styles.boxTwoText}>
                            <Typography variant="title-md-medium">
                                MCQs for each lesson.
                            </Typography>
                            <Typography variant="text-xl-regular">
                                Interactiveness - personified.
                            </Typography>
                        </div>
                    </div>
                </div>
                <div>
                    <img className={styles.writingImage} src={writing} alt="" />
                </div>

                <Typography variant="text-xl-medium" alignment="center">
                    The goal, always, is to try and ensure that you have access
                    to as many resources as possible, without having to open
                    another tab, or another website. Which swiftly takes us to
                    the Practice section.
                </Typography>

                <div>
                    <img className={styles.TabsImage} src={Tabs} alt="" />
                </div>
            </div>
            <TopicalVideo></TopicalVideo>
        </>
    );
};
