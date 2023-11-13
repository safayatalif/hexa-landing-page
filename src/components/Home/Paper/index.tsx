import React from 'react';
import { Typography } from '../../../common';
import styles from './Paper.module.scss';

import BoxContainer from '../../../assets/home/BoxContainer.png';
import metrics1 from '../../../assets/home/Difficulty.png';
import Question from '../../../assets/home/Question.png';
import Split from '../../../assets/home/Split.png';
import Timer from '../../../assets/home/Timer.png';
import metrics2 from '../../../assets/home/Usefulness.png';

export const Paper: React.FC = () => {
    return (
        <div className={styles.paperContainer}>
            <div className={styles.paperBoxContainer}>
                <div
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    className={styles.paperBox2}
                >
                    <div className={styles.boxTwoText}>
                        <Typography variant="title-md-semibold">
                            Past paper database
                        </Typography>
                        <Typography variant="text-xl-regular">
                            No need to open another tab for looking up past
                            papers. It’s a one-stop drop.
                        </Typography>
                    </div>
                    <img
                        className={styles.paperBoxImage2}
                        src={Question}
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
                    className={styles.paperBox1}
                >
                    <img className={styles.paperBoxImage} src={Timer} alt="" />
                    <div className={styles.paperBoxText}>
                        <Typography variant="title-md-semibold" color="grey">
                            Tick tock
                        </Typography>
                        <Typography variant="title-md-semibold" color="white">
                            Time is money.
                        </Typography>
                        <Typography variant="text-xl-regular">
                            Utilize your time through pomodoro routines, or make
                            up a timer of your own with the personalized study
                            timer.
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
                className={styles.metricsBoxContainer}
            >
                <div className={styles.metricsBox1}>
                    <Typography variant="title-md-semibold">
                        Sorting Metrics
                    </Typography>
                    <Typography variant="text-xl-regular">
                        Easily evaluate and decide which past paper to practice
                        based on difficulty and usefulness ratings.
                    </Typography>
                    <div className={styles.metricsBoxImage}>
                        <img
                            className={styles.metricsBoxImage1}
                            src={metrics1}
                            alt=""
                        />
                        <img
                            className={styles.metricsBoxImage2}
                            src={metrics2}
                            alt=""
                        />
                    </div>
                </div>
                <div className={styles.metricsBox2}>
                    <div className={styles.boxTwoText}>
                        <Typography variant="title-md-semibold">
                            Split view
                        </Typography>
                        <Typography variant="text-xl-regular">
                            View questions papers and mark schemes together,
                            without the need to toggle between tabs.
                        </Typography>
                    </div>
                    <img
                        className={styles.metricsBoxImage2}
                        src={Split}
                        alt=""
                    />
                </div>
            </div>
            <div
                data-aos="zoom-in-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
            >
                <img
                    className={styles.BoxContainerImage}
                    src={BoxContainer}
                    alt=""
                />
            </div>
        </div>
    );
};
