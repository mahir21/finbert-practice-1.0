import React from 'react';
import { Link } from 'react-router-dom';
import './css/Lstm.css';
import lstmImg1 from './images/L1.png';
import lstmImg2 from './images/L2.png';
import lstmImg3 from './images/L3.png';
import lstmImg4 from './images/L4.png';


const Lstm = () => {
    return (
        <div className="lstm-container">
            <h2 className="lstm-heading">LSTM</h2>
            <img src={lstmImg1} alt="Cell state" className="lstm-img" />
            <p>
                LSTM models are a type of recurrent neural network model that is designed to keep information for long-term dependency and remember information over an extended sequence of time. It was introduced to overcome the limitations of traditional RNN models such as exploding and vanishing gradient problems.
            </p>
            <h2 className="lstm-heading-breakdown"><u>LSTM architecture breakdown:</u></h2>
            <h3>1. Cell state (Ct)</h3>
            <p>
                The cell state is the memory of the LSTM unit. It runs straight down the entire chain, with only minor linear interactions, making it easier for information to flow along it. It can be thought of as a conveyor belt that runs straight down the entire chain with only some minor linear interactions. Information can be added or removed from the cell state using structures called gates.
            </p>
            <h3>2. Forget Gate (ft)</h3>
            <p>
                A forget gate is a sigmoid layer that decides what information to discard from the cell. It takes the previous cell state Ct−1 and inputs Xt and outputs a value between 0 and 1 for each number in the cell state. A value of ‘0’ means discard the information and a value of ‘1’ means keep the information.
            </p>
            <img src={lstmImg2} alt="Forget gate" className="lstm-img" />
            <h3>3. Input Gate (it)</h3>
            <p>
                The input gate is a sigmoid layer followed by a tanh layer. It decides what new information to store in the cell state. The sigmoid layer decides which value to update and the tanh layer creates a vector of new candidate values that could be added to the state.
            </p>
            <img src={lstmImg3} alt="Input gate" className="lstm-img" />
            <h3>4. Update Cell State</h3>
            <p>
                The input gate determines which values from the candidate updates should be added to the cell state. It multiplies the candidate values by the output of the input gate element-wise, and then adds this to the cell state.
            </p>
            <h3>5. Output Gate (ot)</h3>
            <p>
                The output gate decides what to output based on the cell state. First, it passes the cell state through a tanh function (to push the values to be between -1 and 1), and then it multiplies it by the output of a sigmoid gate. This sigmoid gate decides which parts of the cell state should be output.
            </p>
            <img src={lstmImg4} alt="Update cell state" className="lstm-img" />
            <h3>6. Hidden State (ht)</h3>
            <p>
                The hidden state is the output of the LSTM unit. It's a filtered version of the cell state, where some information has been thrown away. This output is based on the cell state and acts as the memory of the LSTM unit.
            </p>
            <div className="button-container">
            <Link to="/finbert" className="back-btn">Previous Page</Link>
            <Link to="/" className="home-btn">Home</Link>
            <Link to="/gru" className="next-btn">Next page</Link>
            </div>

        </div>
    );
};

export default Lstm;
