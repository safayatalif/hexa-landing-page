import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Input, PageLink, Typography } from '../../common';
import { Navbar } from '../../components';
import { useLoginMutation } from '../../features/auth/authApiSlice';
import { setCredentials } from '../../features/auth/authSlice';
import styles from './Login.module.scss';

export const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [login, { isLoading }] = useLoginMutation();
    // const loginMutation = useLoginMutation();
    // const login = useMemo(() => loginMutation[0], [loginMutation]);
    // const isLoading = useMemo(
    //     () => loginMutation[1].isLoading,
    //     [loginMutation]
    // );
    console.log(isLoading, 'loading');
    // const [logout] = useLogoutMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        try {
            console.log(email, password);
            const user = await login({ email, password }).unwrap();
            dispatch(setCredentials({ user }));
            console.log(user);
            navigate('/welcome');
        } catch (err) {
            console.log(err);
        }
    };

    // const handleLogout = async (e: any) => {
    //     e.preventDefault();

    //     try {
    //         console.log('Logging out');
    //         await logout({}).unwrap();
    //         navigate('/login');
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const handlePwdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setPassword(e.target.value);
    };
    return (
        <>
            <Navbar></Navbar>
            <div className={styles.loginContainer}>
                <div className={styles.contentContainer}>
                    <Typography variant="title-xl-semibold" color="blue-gdnt">
                        Login
                    </Typography>
                    <Typography variant="text-xl-regular" color="grey">
                        Welcome back! Login to continue
                    </Typography>
                    <div className={styles.formContainer}>
                        <Input
                            inputType="email"
                            required={true}
                            placeholder="Enter your email"
                            inputClassname={styles.emailInput}
                            onChange={handleEmailInput}
                        />
                        <Input
                            inputType="password"
                            required={true}
                            placeholder="Enter your password"
                            inputClassname={styles.passwordInput}
                            onChange={handlePwdInput}
                        />
                        <Button
                            styleType="primary"
                            className={styles.continueButton}
                            onClick={handleLogin}
                        >
                            <Typography
                                variant="text-md-semibold"
                                color="white"
                            >
                                Continue
                            </Typography>
                        </Button>
                    </div>
                    <div className={styles.signupContainer}>
                        <Typography variant="text-sm-regular" color="grey">
                            Don’t have an account?
                        </Typography>
                        <PageLink to="/new">
                            <Typography
                                variant="text-sm-semibold"
                                color="blue-primary-700"
                            >
                                Sign up
                            </Typography>
                        </PageLink>
                    </div>
                    <PageLink to="/new">
                        <Typography
                            variant="text-sm-semibold"
                            color="blue-primary-700"
                        >
                            Forgot password?
                        </Typography>
                    </PageLink>
                </div>
            </div>
        </>
    );
};
