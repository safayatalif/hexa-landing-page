import React from 'react';
import { Link } from 'react-router-dom';
import contact from '../../assets/contact-image/Banner Image.png';
import { Button, Input, Typography } from '../../common';
import ContactNavbar from '../../components/ContactNavbar';
import styles from './Contact.module.scss';
export const Contact: React.FC = () => {
    return (
        <>
            <ContactNavbar></ContactNavbar>
            <div className={styles.contactBanner}>
                <img
                    className={styles.contactBannerImage}
                    src={contact}
                    alt=""
                />
            </div>
            <div className={styles.loginContainer}>
                <div className={styles.contentContainer}>
                    <Typography variant="title-sm-medium" alignment="center">
                        We’d love to hear from you
                    </Typography>
                    <Typography
                        variant="text-xl-regular"
                        color="grey"
                        alignment="center"
                    >
                        Share your thoughts with us!
                    </Typography>
                    <div className={styles.formContainer}>
                        <div className={styles.firstName}>
                            <label>
                                <Typography variant="text-sm-medium">
                                    First name
                                </Typography>
                            </label>
                            <Input
                                inputType="text"
                                required={true}
                                placeholder="First name"
                                inputClassname={styles.firstNameInput}
                            />
                        </div>
                        <div className={styles.lastName}>
                            <label>
                                <Typography variant="text-sm-medium">
                                    Last name
                                </Typography>
                            </label>

                            <Input
                                inputType="text"
                                required={true}
                                placeholder="Last name"
                                inputClassname={styles.lastNameInput}
                            />
                        </div>
                    </div>
                    <div>
                        <label>
                            <Typography variant="text-sm-medium">
                                Email
                            </Typography>
                        </label>

                        <Input
                            inputType="Email"
                            required={true}
                            placeholder="you@company.com"
                            inputClassname={styles.emailInput}
                        />
                    </div>
                    <div>
                        <label>
                            <Typography variant="text-sm-medium">
                                Message
                            </Typography>
                        </label>
                        <textarea
                            className={styles.messageInput}
                            name="comment"
                        >
                            Leave us a message...
                        </textarea>

                        {/* <Input
                            inputType="textarea"
                            required={true}
                            placeholder="Leave us a message..."
                            inputClassname={styles.messageInput}
                        /> */}
                    </div>

                    <div className={styles.signupContainer}>
                        <Input
                            inputType="checkbox"
                            required={true}
                            placeholder="Enter your message"
                            inputClassname={styles.checkInput}
                        />

                        <Typography variant="text-sm-medium" color="grey">
                            You agree to our friendly{' '}
                            <a href="">Privacy Policy </a> and{' '}
                            <a href="">Terms of Use. </a>
                        </Typography>
                    </div>
                    <Link to="/contact/thank">
                        <Button
                            styleType="primary"
                            className={styles.continueButton}
                        >
                            <Typography
                                variant="text-md-semibold"
                                color="white"
                            >
                                Send Message
                            </Typography>
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
};
