import React from 'react';
import OneStep from '../../../assets/home/OneStop.png';
import { Button, Typography } from '../../../common';
import styles from './Learning.module.scss';

export const Learning: React.FC = () => {
    return (
        <div className={styles.learnContainer}>
            <img className={styles.oneStepImage} src={OneStep} alt="" />
            <Typography variant="title-2xl-semibold" alignment="left">
                Education with absolute delight.
            </Typography>
            <div className={styles.learnImageBox}>
                <Typography
                    variant="title-sm-medium"
                    alignment="center"
                    color="white"
                >
                    Get a headstart in your exam preparations. Now.
                </Typography>
                <div className={styles.buttonContainer}>
                    <Button styleType="outline" className={styles.joinButton}>
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
    );
};
