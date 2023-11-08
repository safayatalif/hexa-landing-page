import React from 'react';
import { Button, Typography } from '../../../common';
import { Navbar } from '../../../components';
import styles from './Courses.module.scss';

export const Courses: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className={styles.mainContainer}>
                <p className={styles.title}>LEARN</p>
                <Typography
                    variant="title-lg-medium"
                    color="grey-gradient"
                    alignment="center"
                >
                    Learning, superboosted.
                </Typography>
                <div className={styles.physicsPoster}>
                    <div className={styles.details}>
                        <Typography variant="text-xl-medium" color="grey-50">
                            CIE O Levels
                        </Typography>
                        <Typography variant="title-2xl-semibold" color="white">
                            Physics
                        </Typography>
                        <Button
                            styleType="secondary"
                            className={styles.courseButton}
                        >
                            <Typography
                                variant="text-md-semibold"
                                color="black"
                            >
                                Start learning
                            </Typography>
                        </Button>
                    </div>
                </div>

                <div className={styles.middleSection}>
                    <p className={styles.middleText}>
                        Cinematic lectures with digestible notes and bitesized
                        recaps.
                    </p>
                </div>

                <div className={styles.logicSection}>
                    <div className={styles.question}>
                        <Typography
                            variant="title-xl-medium"
                            color="white"
                            localClassNames={styles.questionText}
                        >
                            Just one course?
                        </Typography>
                        <Typography
                            variant="text-xl-regular"
                            color="white"
                            localClassNames={styles.mobileanswerText}
                        >
                            Correct. Even though we`ve been working on this
                            product for a long time - whatever we do, we wanna
                            do it right. And that `right` can only come from
                            user feedbacks. Try it out, learn, have fun, and let
                            us know how you feel!
                        </Typography>
                    </div>
                    <div className={styles.answer}>
                        <Typography
                            variant="text-xl-regular"
                            color="white"
                            localClassNames={styles.answerText}
                        >
                            Correct. Even though we`ve been working on this
                            product for a long time - whatever we do, we wanna
                            do it right. And that `right` can only come from
                            user feedbacks. Try it out, learn, have fun, and let
                            us know how you feel!
                        </Typography>
                    </div>
                </div>
            </div>
        </>
    );
};
