// Register.js

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for navigation
import styles from './css/register.module.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:5000/register', {
                username: username,
                password: password
            });
            if (response.status === 200) {
                setMessage('Registration successful. Please log in.');
                // Redirect to login page
            }
        } catch (error) {
            setMessage('Failed to register user');
        }
    };

    return (
        <div className={styles.registerContainer}>
            <h2 className={styles.registerTitle}>Register</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className={styles.inputField} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.inputField} />
            <button onClick={handleRegister} className={styles.registerButton}>Register</button>
            {message && <p className={styles.message}>{message}</p>}
            <Link to="/login" className={styles.loginLink}>Already have an account? <u>Login</u></Link>
        </div>
    );
};

export default Register;
