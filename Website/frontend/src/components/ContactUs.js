// ContactUs.js

import React, { useState } from 'react';
import axios from 'axios';
import styles from './css/ContactUs.module.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/contact', formData);
            if (response.status === 200) {
                setSuccessMessage('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            }
        } catch (error) {
            setErrorMessage('Failed to send message. Please try again.');
        }
    };

    return (
        <div className={styles.contactContainer}>
            <h2 className={styles.contactHeading}>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>Your Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={styles.formInput} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>Your Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={styles.formInput} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>Your Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} className={styles.formTextarea} rows="5" required></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
            {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        </div>
    );
};

export default ContactUs;
