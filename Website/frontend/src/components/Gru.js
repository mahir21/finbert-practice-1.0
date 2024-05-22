import React from 'react';
import { Link } from 'react-router-dom';
import './css/Gru.css';
import gruImg1 from './images/g1.png';
import gruImg2 from './images/g2.jpg';

const Gru = () => {
    return (
        <div className="gru-container">
            <h2 className="gru-heading">GRU</h2>
            <img src={gruImg1} alt="GRU Architecture" className="gru-img" />
            <p>
                A type of recurrent neural network (RNN) architecture similar to LSTM (Long Short-Term Memory) is the GRU model which stands for Gated Recurrent Unit. It is designed to handle sequential data, like text or time series. It’s more computationally efficient because of its simpler architecture compared to LSTM.
            </p>
            <h2 className="gru-heading-breakdown">How GRU works:</h2>
            <p>
                GRU processes one element of sequential data at a time. It updates its hidden state based on the current input and the previous state. A “candidate activation vector” is computed at each step which combines the information from the input and the previous state. To update the hidden state of the next time step, the “candidate activation vector” is used. There are two ways to compute the “candidate activation vector” - the reset gate and the update gate. How much of the previous hidden state to forget will depend on the reset gate and how much of the candidate activation vector to incorporate into the new hidden state will depend on the update gate.
            </p>
            <img src={gruImg2} alt="GRU Architecture" className="gru-img" />
            <h2 className="gru-heading-breakdown">GRU Architecture:</h2>
            <p>
                The GRU architecture comprises the following components:
            </p>
            <ol>
                <li>Input layer: A sequence of words or a time series of values (sequential data) is fed into the input layer of GRU.</li>
                <li>Hidden layer: The recurrent computation occurs at the hidden layer. Based on the current input and the previous the hidden state is updated at each time step. The hidden state represents the network’s “memory” of the previous inputs which is a vector.</li>
                <li>Reset gate: How much of the previous hidden state to forget is determined by the reset gate. The previous hidden state and the current input are taken as inputs and a vector of numbers between 0 and 1 that controls the degree to which the previous hidden state is “reset” at the current time step is produced.</li>
                <li>Update gate: How much of the candidate activation vector to incorporate into the new hidden state will depend on the update gate. The previous hidden state and the current input are taken as inputs and a vector of numbers between 0 and 1 that controls the degree to which the candidate activation vector is incorporated into the new hidden state is produced.</li>
                <li>Candidate activation vector: The candidate activation vector is an alteration of the combined previous hidden state and the current input. A tanh activation function that squeezes its output between -1 and 1 is used for computing it.</li>
                <li>Output layer: The output layer produces the network’s output by taking the final hidden state as input which is a single number, a sequence of numbers, or a probability distribution over classes that depends on the task at hand.</li>
            </ol>
            <div className="button-container">
                <Link to="/lstm" className="back-btn">Previous Page</Link>
                <Link to="/" className="home-btn">Home</Link>
                <Link to="/project" className="next-btn">About Project</Link>
            </div>
        </div>
    );
};

export default Gru;
