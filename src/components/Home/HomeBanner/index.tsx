import React from 'react';
// import { HexaBetaLogo } from '../../assets';
import Quantum from '../../../assets/home/Quantum.png';
import Velocity from '../../../assets/home/Velocity.png';
import { Button, Typography } from '../../../common';
import styles from './HomeBanner.module.scss';

export const HomeBanner: React.FC = () => {
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.dualBackground}>
                <div className={styles.heading}>
                    <Typography variant="title-xl-semibold">
                        The most stylish learning <br /> experience. Ever.
                    </Typography>
                    <Typography variant="text-xs-regular">
                        <span className={styles.p1}>
                            Making high school exam preparations fun,
                            delightful, and cinematic.
                        </span>
                    </Typography>
                </div>
                <div className={styles.buttonContainer}>
                    <Button styleType="primary" className={styles.getButton}>
                        <Typography variant="text-md-semibold" color="white">
                            Get Started
                        </Typography>
                    </Button>
                    <Button styleType="outline" className={styles.watchButton}>
                        <Typography variant="text-md-semibold" color="white">
                            Watch Physics trailer
                        </Typography>
                    </Button>
                </div>

                <div className={styles.awardContainer}>
                    <img className={styles.award} src={Quantum} alt="" />
                    <img className={styles.award} src={Velocity} alt="" />
                </div>
            </div>
            <div className={styles.bottomHeading}>
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
    );
};
