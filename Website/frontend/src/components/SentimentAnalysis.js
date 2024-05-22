// SentimentAnalysis.js

import React, { useState } from 'react';
import axios from 'axios';
import styles from './css/SentimentAnalysis.module.css';  // Import CSS module

function SentimentAnalysis() {
    const [selectedDataset, setSelectedDataset] = useState('');
    const [plotUrl, setPlotUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);  // Track if dataset has been submitted

    const handleDatasetChange = (event) => {
        setSelectedDataset(event.target.value);
    };

    const handleSubmit = () => {
        if (!selectedDataset || submitted) return;  // Check if dataset is empty or already submitted
        setIsLoading(true);
        setSubmitted(true);  // Set submitted to true after submitting dataset
        axios.post('http://localhost:5000/sentiment_analysis', { dataset: selectedDataset })
            .then(response => {
                setPlotUrl(response.data.plot_url);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Sentiment Analysis</h2>
            <select value={selectedDataset} onChange={handleDatasetChange} className={styles.dropdown}>
                <option value="">Select Dataset</option>
                <option value="DutchBanglaBankFinbert.csv">Dutch Bangla Bank</option>
                <option value="CityBankFinbert.csv">City Bank</option>
                {/* Add more options for different datasets */}
            </select>
            <button onClick={handleSubmit} className={`${styles.button} ${isLoading ? styles.loading : ''}`}>
                {isLoading ? 'Loading...' : 'Analyze'}
            </button>
            {submitted && (
                <p className={styles.submittedMessage}>Dataset has been submitted. Please wait for the analysis to complete.</p>
            )}
            {plotUrl && (
                <div className={styles.plotContainer}>
                    <img src={`data:image/png;base64,${plotUrl}`} alt="Sentiment Distribution" className={styles.plot} />
                </div>
            )}
        </div>
    );
}

export default SentimentAnalysis;
