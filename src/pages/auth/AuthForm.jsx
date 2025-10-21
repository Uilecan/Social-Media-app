import React, { useState } from 'react';
import styles from './AuthForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../../redux/slices/authSlice';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/selectors';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const user = useSelector(selectUser);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const submitHandler = async (event) => {
        event.preventDefault();

        const payload = {
            email: username,
            password: password
        };

        try {
            if (isLogin) {

                await dispatch(loginUser(payload)).unwrap();
                if (user.isAuthenticated) {
                    navigate('/');
                }

            } else {
                await dispatch(registerUser(payload)).unwrap();



            }
        } catch (err) {
            console.error('Auth error:', err);

        }
    }

    const actionIsNotLoading = (
        <button type='submit'>{isLogin ? 'Login' : 'Create new Account'}</button>
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
                    {user.loading && <p>Please try again</p>}
                    {user.error && <p>Sending request ...</p>}
                    {!user.loading && actionIsNotLoading}
                    <button type='button' className={styles.toggle} onClick={toggleAuthState}>
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </button>
                </div>
            </form>
        </div>

    )
}

export default AuthForm;