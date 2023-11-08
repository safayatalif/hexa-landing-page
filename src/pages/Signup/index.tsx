import Spline from '@splinetool/react-spline';
import React, { useState } from 'react';
import { EmailIcon } from '../../assets';
import { Button, Input, PageLink, Typography } from '../../common';
import { Navbar } from '../../components';
import styles from './Signup.module.scss';

export const Signup: React.FC = () => {
    const [signupType, setSignupType] = useState<'individual' | 'school' | ''>(
        ''
    );
    return (
        <>
            {signupType ? (
                <div className={styles.signupPage}>
                    <Navbar />
                    <div className={styles.formSection}>
                        <div className={styles.formContainer}>
                            <Typography
                                variant="title-md-semibold"
                                color="blue-gdnt"
                                localClassNames={styles.title}
                            >
                                Sign up
                            </Typography>
                            <Typography
                                variant="text-md-regular"
                                color="grey"
                                localClassNames={styles.subtitle}
                            >
                                Welcome! Sign up below to continue.
                            </Typography>

                            <div className={styles.inputContainer}>
                                <Typography
                                    variant="text-sm-medium"
                                    color="grey-700"
                                >
                                    Email*
                                </Typography>
                                <Input
                                    inputType="email"
                                    required={true}
                                    placeholder="Enter your email"
                                    inputClassname={styles.inputBox}
                                />
                            </div>
                            {signupType === 'school' && (
                                <div className={styles.inputContainer}>
                                    <Typography
                                        variant="text-sm-medium"
                                        color="grey-700"
                                    >
                                        School Passphrase*
                                    </Typography>
                                    <Input
                                        inputType="text"
                                        required={true}
                                        placeholder="Enter your personalised passphrase"
                                        inputClassname={styles.inputBox}
                                    />
                                </div>
                            )}
                            <div className={styles.inputContainer}>
                                <Typography
                                    variant="text-sm-medium"
                                    color="grey-700"
                                >
                                    Mobile Number*
                                </Typography>
                                <Input
                                    inputType="tel"
                                    required={true}
                                    placeholder="Enter your mobile number"
                                    inputClassname={styles.inputBox}
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <Typography
                                    variant="text-sm-medium"
                                    color="grey-700"
                                >
                                    Password*
                                </Typography>
                                <Input
                                    inputType="password"
                                    required={true}
                                    placeholder="Create a password"
                                    inputClassname={styles.inputBox}
                                />
                            </div>

                            <Button
                                styleType="primary"
                                className={styles.getStartedButton}
                            >
                                <Typography
                                    variant="text-md-semibold"
                                    color="white"
                                >
                                    Get started
                                </Typography>
                            </Button>
                            <div className={styles.loginLink}>
                                <Typography
                                    variant="text-sm-regular"
                                    color="grey"
                                >
                                    Already have an account?
                                </Typography>
                                <PageLink to="/new">
                                    <Typography
                                        variant="text-sm-semibold"
                                        color="blue-primary-700"
                                    >
                                        Log in
                                    </Typography>
                                </PageLink>
                            </div>
                        </div>

                        <div className={styles.footer}>
                            <Typography
                                variant="text-sm-regular"
                                color="grey-600"
                            >
                                © Hexa Inc 2023
                            </Typography>
                            <div className={styles.footerEmail}>
                                <img src={EmailIcon} alt="Hexa email" />
                                <Typography
                                    variant="text-sm-regular"
                                    color="grey-600"
                                >
                                    <a
                                        className={styles.emailLink}
                                        href="mailto:hexapapers@gmail.com"
                                    >
                                        hexapapers@gmail.com
                                    </a>
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div className={styles.assetSection}>
                        <Spline
                            className={styles.asset}
                            scene="https://prod.spline.design/XxFFaQQjEzAslqgL/scene.splinecode"
                        />
                        <div className={styles.overlayText}>
                            <Typography
                                variant="text-xl-semibold"
                                color="white"
                            >
                                Redefining Education Fundamentally
                            </Typography>
                            <Typography
                                variant="text-md-regular"
                                color="white"
                                alignment="center"
                            >
                                Be one of the first in our pursuit of
                                democratising, digitising, and personalising
                                international education.
                            </Typography>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.initialPage}>
                    <Typography variant="title-xl-semibold" color="blue-gdnt">
                        Hey there!
                    </Typography>
                    <Typography
                        variant="title-sm-regular"
                        color="blue-primary-900"
                    >
                        Do you want to sign up individually or through a school?
                    </Typography>
                    <div className={styles.optionButtons}>
                        <Button
                            styleType="primary"
                            className={styles.optionButton}
                            onClick={() => setSignupType('individual')}
                        >
                            <Typography
                                variant="text-md-semibold"
                                color="white"
                            >
                                Individually
                            </Typography>
                        </Button>
                        <Button
                            styleType="secondary"
                            className={styles.optionButton}
                            onClick={() => setSignupType('school')}
                        >
                            <Typography
                                variant="text-md-semibold"
                                color="grey-900"
                            >
                                Through a school
                            </Typography>
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};
