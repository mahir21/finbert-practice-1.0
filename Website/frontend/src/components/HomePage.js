// Import necessary packages and components
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Form';
import SentimentCounts from './SentimentCounts';
import Graph from './Graph';
import './css/HomePage.module.css';

function HomePage() {
  // State variables
  const [selectedDataset, setSelectedDataset] = useState('DutchBanglaBankFinbert.csv');
  const [selectedModel, setSelectedModel] = useState('lstm');
  const [plotUrl, setPlotUrl] = useState('');
  const [sentimentCounts, setSentimentCounts] = useState({
    neutral: 0,
    positive: 0,
    negative: 0
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleDatasetChange = (e) => {
    setSelectedDataset(e.target.value);
  };

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/', {
        dataset: selectedDataset,
        model: selectedModel
      });
      setPlotUrl(response.data.plot_url);
      setSentimentCounts(response.data.sentiment_counts);
      setIsLoading(false);
      setSubmissionMessage('Submission successful');
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
      setSubmissionMessage('Submission failed');
    }
  };

  // Clear submission message after 3 seconds
  useEffect(() => {
    if (submissionMessage) {
      const timer = setTimeout(() => {
        setSubmissionMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submissionMessage]);

  // Render the components
  return (
    <div className="app-container">
      <Graph plotUrl={plotUrl} isLoading={isLoading} />
      <SentimentCounts sentimentCounts={sentimentCounts} />
      <Form
        selectedDataset={selectedDataset}
        selectedModel={selectedModel}
        onSubmit={handleSubmit}
        onChangeDataset={handleDatasetChange}
        onChangeModel={handleModelChange}
        isLoading={isLoading}
        submissionMessage={submissionMessage}
      />
    </div>
  );
}

export default HomePage;
