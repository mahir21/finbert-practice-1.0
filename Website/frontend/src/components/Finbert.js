import React from 'react';
import { Link } from 'react-router-dom';
import './css/Finbert.css';
import F1 from './images/f1.png';
import F2 from './images/f2.png';
import F3 from './images/f3.png';
import F4 from './images/f4.png';

const Finbert = () => {
    return (
        <div className="finbert-container">
            <h2 className="finbert-heading">Bert Model</h2>
            <p>
                The Bert model is a state-of-the-art NLP model developed by Google. The Bert model enables context awareness for sentences.
            </p>
            <p>
                Example:
                <ol>
                    <li>I'm learning Python</li>
                    <li>I spotted a magnificent Python</li>
                </ol>
            </p>
            <p>
                The Bert model has the ability to differentiate between these two sentences. The Bert does this by using Transformer, which is a deep learning Architecture mostly used in NLP cases. The Bert architecture uses the Encoder-Decoder paradigm.
            </p>
            <p>
                The encoder takes in the input sentence, learns its representation, and then sends the representation to the decoder. The decoder generates the output sentence. The Transformer uses many layers of encoders to generate output. Bert has different configurations based on how many models it has been trained to.
            </p>
            <p>
                Bert's model has been trained on a huge amount of datasets. Bert's model was trained on data from BookCorpus and on Wikipedia. (it was trained on 3.5 billion words.)
            </p>
            <p align="center"><b>Representation of the bert model:</b></p>
            <div className="image-container">
                <img src={F1} alt="Bert Model" />
            </div>
            
            <h2 className="finbert-heading">Finbert</h2>
            <p>
                The Bert model is a state-of-the-art NLP model developed by Google. The Bert model enables context awareness for sentences.
            </p>
            <p>
                Example:
                <ol>
                    <li>I'm learning Python</li>
                    <li>I spotted a magnificent Python</li>
                </ol>
            </p>
            <p>
                The Bert model can differentiate between these two sentences. The Bert does this using Transformer, a deep learning Architecture mostly used in NLP cases. The Bert architecture uses the Encoder-Decoder paradigm.
            </p>
            <p>
                The encoder takes in the input sentence, learns its representation, and then sends the representation to the decoder. The decoder generates the output sentence. The Transformer uses many layers of encoders to generate output. Bert has different configurations based on how many models it has been trained to.
            </p>
            <p>
                Bert's model has been trained on a huge amount of datasets. Bert's model was trained on data from BookCorpus and Wikipedia. (it was trained on 3.5 billion words.)
            </p>
            <h2 className="finbert-heading">Pre-Trained financial text data:</h2>
            <p>
             The initial stage of the Finbert model is training the data based on financial text. The Bert model was trained using English Wikipedia and BookCorpus 3.31b words to train data. FinBERT is pre-trained on financial text data from Yahoo Finance, Financeweb, and RedditFinaceQA for fine-tuning the financial domain[11]. Among them, Yahoo Finance contained 4.71B words, Financial Web (6.38B words), and 1.62 B words from Reddit finance.
            </p>            
            <div className="image-container">
                <img src={F2} alt="Bert Model" />
            </div>
            <p align="center"><b>Bert model:</b></p>
            <div className="image-container">
                <img src={F3} alt="Finbert Model" />
            </div>
            <p align="center"><b>FinBert model:</b></p>
            <h2 className="finbert-heading">Tokenization and Encoding</h2>
            <p>
                Similar to transformer-based models, Finbert tokenizer input text into subwords and then does this subwords into numerical representation using learned embeddings. This allows Finbert to preserve variable length input sequence efficiently.
            </p>
            <div className="image-container">
                <img src={F4} alt="Finbert Model" />
            </div>
            <h2 className="finbert-heading">Contextual Understanding</h2>
            <p>
                Finbert, being a transformer-based model, utilizes self-attention mechanisms to capture the contextual relationships between words in the input text. This enables it to understand the meaning of words within the context of the entire sentence or document rather than treating each word in isolation.
            </p>
            <h2 className="finbert-heading">Task Specific Output</h2>
            <p>
                Depending on the task it's fine-tuned for, FinBERT produces task-specific outputs. For example, if it's fine-tuned for sentiment analysis, it might output sentiment scores (e.g., positive, negative, neutral) for input financial texts. If it's fine-tuned for classification, it might output probabilities or labels indicating the predicted class of a given input text.
            </p>
            <div className="button-container">
                <Link to="/project" className="project-page-btn">Previous Page</Link>
                <Link to="/" className="back-to-home-btn">Home</Link>
                <Link to="/lstm" className="lstm-page-btn">Next Page</Link>
            </div>
        </div>
    );
};

export default Finbert;