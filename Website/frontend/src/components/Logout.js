import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const Logout = () => {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Attempting to log out...');
        const logoutUser = async () => {
            try {
                const response = await axios.post(`${process.env.REACT_APP_API_URL}/logout`, {}, { withCredentials: true });
                console.log('Logout response:', response);
                setUser(null);
                console.log('User set to null, navigating to home...');
                navigate('/'); // Ensure this matches a defined route in your App component
            } catch (error) {
                console.error('Logout failed:', error);
            }
        };

        logoutUser();
    }, [setUser, navigate]);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Logging Out...</h1>
        </div>
    );
};

export default Logout;
