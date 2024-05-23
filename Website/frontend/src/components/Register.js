import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './css/register.module.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate(); // Changed from history to navigate for consistency

    const handleRegister = async () => {
        setIsSubmitting(true);
        try {
            const response = await axios.post('http://localhost:5000/register', {
                username: username,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                setMessage('Registration successful. Please log in.');
                setUsername('');
                setPassword('');
                navigate('/login'); // Changed to navigate
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setMessage(error.response.data.message || 'Failed to register user');
            } else {
                setMessage('Failed to register user');
            }
        }
        setIsSubmitting(false);
    };

    return (
        <div className={styles.registerContainer}>
            <h2 className={styles.registerTitle}>Register</h2>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                className={styles.inputField} 
                disabled={isSubmitting}
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className={styles.inputField}
                disabled={isSubmitting}
            />
            <button 
                onClick={handleRegister} 
                className={styles.registerButton}
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Registering...' : 'Register'}
            </button>
            {message && <p className={styles.message}>{message}</p>}
            <Link to="/login" className={styles.loginLink}>Already have an account? <u>Login</u></Link>
        </div>
    );
};

export default Register;
