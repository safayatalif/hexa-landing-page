import React from 'react';
// import { HexaBetaLogo } from '../../assets';
import { Typography } from '../../../common';
import styles from './HomeBanner.module.scss';

export const HomeBanner: React.FC = () => {
    return (
        <div className={styles.dualBackground}>
            <div className={styles.heading}>
                <Typography variant="title-xl-semibold">
                    The most stylish learning <br /> experience. Ever.
                </Typography>
                <Typography variant="text-xs-regular">
                    <p className={styles.p1}>
                        Making high school exam preparations fun, delightful,
                        and cinematic.
                    </p>
                </Typography>
            </div>
            {/* <div>
                    <img className={styles.laptopImage} src={laptop} alt="" />
                </div> */}
        </div>
    );
};
