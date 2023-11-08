import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    useLoginMutation,
    useLogoutMutation,
} from '../../features/auth/authApiSlice';
import { setCredentials } from '../../features/auth/authSlice';

export const OldLogin: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [login, { isLoading }] = useLoginMutation();
    const [logout] = useLogoutMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {
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

    const handleLogout = async (e: any) => {
        e.preventDefault();

        try {
            console.log('Logging out');
            await logout({}).unwrap();
            navigate('/login');
        } catch (err) {
            console.log(err);
        }
    };

    const handleEmailInput = (e: any) => setEmail(e.target.value);

    const handlePwdInput = (e: any) => setPassword(e.target.value);

    return (
        <>
            <div>
                {isLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            id="username"
                            value={email}
                            onChange={handleEmailInput}
                            autoComplete="off"
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={handlePwdInput}
                            value={password}
                            required
                        />
                        <button>Sign In</button>
                        <button onClick={handleLogout}>Sign out</button>
                    </form>
                )}
            </div>
        </>
    );
};
