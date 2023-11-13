import React from 'react';
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
                    <Typography variant="title-sm-medium">
                        We’d love to hear from you
                    </Typography>
                    <Typography variant="text-xl-regular" color="grey">
                        Share your thoughts with us!
                    </Typography>
                    <div className={styles.formContainer}>
                        <Input
                            inputType="email"
                            required={true}
                            placeholder="Enter your email"
                            inputClassname={styles.firstNameInput}
                        />
                        <Input
                            inputType="password"
                            required={true}
                            placeholder="Enter your password"
                            inputClassname={styles.lastNameInput}
                        />
                    </div>
                    <Input
                        inputType="password"
                        required={true}
                        placeholder="Enter your password"
                        inputClassname={styles.emailInput}
                    />
                    <Input
                        inputType="message"
                        required={true}
                        placeholder="Enter your message"
                        inputClassname={styles.messageInput}
                    />

                    <div className={styles.signupContainer}>
                        <Input
                            inputType="checkbox"
                            required={true}
                            placeholder="Enter your message"
                            inputClassname={styles.checkInput}
                        />

                        <Typography variant="text-sm-semibold">
                            You agree to our friendly Privacy Policy and Term
                        </Typography>
                    </div>
                    <Button
                        styleType="primary"
                        className={styles.continueButton}
                    >
                        <Typography variant="text-md-semibold" color="white">
                            Send Message
                        </Typography>
                    </Button>
                </div>
            </div>
        </>
    );
};
