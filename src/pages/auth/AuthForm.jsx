import React, { useState } from 'react';
import styles from './AuthForm.module.scss';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        navigate('/');

    }

    const actionIsNotLoading = (
        <button>{isLogin ? 'Login' : 'Create new Account'}</button>
    );

    const toggleAuthState = () => {
        setIsLogin((prevState) => !prevState);
    }

    return (
        <div className={styles.auth}>
            <h2>{isLogin ? 'Login' : 'Create new account'}</h2>
            <form onSubmit={submitHandler} autoComplete='off' noValidate>
                <div className={styles.control}>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        id='username'
                        placeholder='Enter your username'
                        value={username}
                        required onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className={styles.control}>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        value={password}
                        required onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter your password'
                    />
                </div>
                <div className={styles.actions}>
                    {isError && <p>Please try again</p>}
                    {isLoading && <p>Sending request ...</p>}
                    {!isLoading && actionIsNotLoading}
                    <button type='button' className={styles.toggle} onClick={toggleAuthState}>
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </button>
                </div>
            </form>
        </div>

    )
}

export default AuthForm;