import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import styles from './css/login.module.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate(); // Corrected use of useNavigate

    useEffect(() => {
        if (user) {
            navigate('/'); // Corrected from history.push('/')
        }
    }, [user, navigate]);

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', {
                username: username,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                setMessage('Login successful');
                setUser({ username: response.data.username });
            }
        } catch (error) {
            setMessage('Invalid username or password');
        }
    };

    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.loginTitle}>Login</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className={styles.inputField} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.inputField} />
            <button onClick={handleLogin} className={styles.loginButton}>Login</button>
            {message && <p className={styles.errorMessage}>{message}</p>}
            <div className={styles.createAccountLink}>
                <Link to="/register" className={styles.createAccountButton}>Create Account</Link>
            </div>
        </div>
    );
};

export default Login;
