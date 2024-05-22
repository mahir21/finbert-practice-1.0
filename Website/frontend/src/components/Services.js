import React from 'react';
import { FaDesktop, FaPalette, FaChartLine } from 'react-icons/fa'; // Import icons
import styles from './css/Services.module.css';

const Services = () => {
    return (
        <div className={styles.servicesContainer}>
            <h2 className={styles.servicesHeading}><p align="center">Our Services</p></h2>
            <div className={styles.service}>
                <FaDesktop className={styles.serviceIcon} />
                <h3 className={styles.serviceTitle}>Stock Price Prediction</h3>
                <p className={styles.serviceDescription}>Predictive analytics services to forecast stock prices using AI and ML models trained on historical data and news sentiment analysis.</p>
            </div>
            <div className={styles.service}>
                <FaPalette className={styles.serviceIcon} />
                <h3 className={styles.serviceTitle}>Financial Sentiment Analysis</h3>
                <p className={styles.serviceDescription}>Sentiment analysis services for financial news and reports to help investors gauge market sentiment and make informed investment decisions.</p>
            </div>
            <div className={styles.service}>
                <FaChartLine className={styles.serviceIcon} />
                <h3 className={styles.serviceTitle}>Custom Dataset Creation</h3>
                <p className={styles.serviceDescription}>Assist businesses in creating custom datasets by collecting and processing financial data, tailored to their specific needs.</p>
            </div>
            <div className={styles.service}>
                <FaChartLine className={styles.serviceIcon} />
                <h3 className={styles.serviceTitle}>Model Training and Deployment</h3>
                <p className={styles.serviceDescription}>Develop and deploy ML models for stock price prediction and financial sentiment analysis, providing accurate and reliable predictions.</p>
            </div>
            <div className={styles.service}>
                <FaChartLine className={styles.serviceIcon} />
                <h3 className={styles.serviceTitle}>Consulting and Training</h3>
                <p className={styles.serviceDescription}>Offer consulting services on implementing AI solutions in the financial sector and training programs for workforce upskilling.</p>
            </div>
        </div>
    );
};

export default Services;
