import React from 'react';
import { Link } from 'react-router-dom';
import './css/AboutProject.css';

const AboutProject = () => {
    return (
        <div className="about-container">
            <h2 className="about-heading">Introduction</h2>
            <p>
                The stock market is a dynamic marketplace where investors buy and sell shares of publicly traded companies. Starting its journey back in the 1600s, it now boasts a combined global net worth of 93.7 trillion dollars. The stock market plays a crucial role in today's economy, as changes in the stock market can impact the economy of an entire country. It operates as a platform that raises capital for companies in exchange for shares. Stock markets operate through exchanges that facilitate the trading of stocks, bonds, and other securities. These markets are influenced by a multitude of factors, including economic indicators, geopolitical events, and more.
            </p>
            <h2 className="about-heading">Background and Motivation</h2>
            <p>
                As mentioned, incorporating more factors when predicting stock market movements generally leads to better results. With the development of natural language processing (NLP) models capable of sentiment analysis, using news articles to predict stock prices has become more feasible. News significantly impacts stock prices as investors often base their decisions on the news. However, misinterpreting the context can lead to costly investment decisions. A predictor that uses both stock prices and news sentiment could be highly beneficial for both regular and professional investors.
            </p>
            <h2 className="about-heading">Study Objective</h2>
            <p>
                Google developed the BERT model (Bidirectional Encoder Representations from Transformers) as a supervised model capable of predicting missing words. FinBERT is a subset of the BERT model, designed explicitly for financial text analysis. FinBERT can understand the sentiment of financial texts, providing sentiment scores indicating whether the text is positive, neutral, or negative. Our report aims to analyze the news of five banks listed on the Dhaka Stock Exchange (DSE) and determine their sentiment scores using the FinBERT model. Once we obtain the sentiment scores, we will create a dataset that includes these scores along with stock market prices. Finally, we aim to use this dataset with models employing recurrent neural network (RNN) architectures to build a predictor.
            </p>
            <h2 className="about-heading">Study Objectives</h2>
            <p>
                Our key contributions to the research are as follows:
                <ol>
                    <li>Creating a dataset that contains sentiment scores alongside Dhaka Stock Exchange stock prices.</li>
                    <li>Utilizing models such as Long Short-Term Memory (LSTM) and Gated Recurrent Units (GRU) to predict stock price movements on the Dhaka Stock Exchange.</li>
                </ol>
                The rest of the paper is organized as follows: Chapter 2 reviews related literature and works, Chapter 3 details data collection and processing, Chapter 4 describes the methodology and project, Chapter 5 presents the results, Chapter 6 discusses the project's impact and implementation, Chapter 7 showcases the user interface, and Chapter 8 outlines limitations and future work.
            </p>
            <h2 className="about-heading">Drawbacks</h2>
            <p>
                Despite the potential benefits, there are several drawbacks to our approach:
                <ol>
                    <li>Data Quality and Availability: Reliable financial news data and stock prices are crucial. Inconsistent or inaccurate data can significantly affect the model's performance.</li>
                    <li>Model Complexity: Advanced models like LSTM and GRU require significant computational power and expertise to implement effectively.</li>
                    <li>Market Volatility: Stock markets are influenced by unpredictable events, making it challenging to account for all variables affecting stock prices.</li>
                </ol>
            </p>
            <h2 className="about-heading">Current Work</h2>
            <p>
                Currently, our project focuses on gathering financial news related to five banks listed on the DSE, analyzing their sentiment using FinBERT, and integrating this sentiment data with historical stock prices. We aim to develop a predictor model using RNN architectures like LSTM and GRU to forecast stock price movements based on this integrated dataset.
            </p>
            <h2 className="about-heading">Short Summary of Dhaka Stock Exchange</h2>
            <p>
                The Dhaka Stock Exchange (DSE) is one of the leading stock exchanges in Bangladesh. It provides a platform for trading securities, facilitating investment in publicly listed companies. The DSE plays a crucial role in the economic development of Bangladesh by enabling capital formation and offering investment opportunities. However, the use of advanced technologies such as AI and machine learning in predicting stock movements is still in its nascent stages in the DSE.
            </p>
            <p>
                In summary, our project aims to leverage advanced NLP models and recurrent neural networks to create a more accurate stock price predictor for the Dhaka Stock Exchange, thereby assisting investors in making better-informed decisions.
            </p>
            <Link to="/" className="back-to-home-btn">Back to Home</Link>
            <Link to="/finbert" className="finbert-page-btn">Next Page</Link>

        </div>
    );
};

export default AboutProject;
