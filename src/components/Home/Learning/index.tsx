import React from 'react';
import OneStep from '../../../assets/home/OneStop.png';
import { Button, Typography } from '../../../common';
import styles from './Learning.module.scss';

export const Learning: React.FC = () => {
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
        </div>
    );
};
