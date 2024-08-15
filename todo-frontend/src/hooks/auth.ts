import { useState, useEffect } from 'react';
import api from '../api';

const useAuth = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // get data from localstorage and set id to header
        const user = localStorage.getItem('user');
        if (user) {
            const { _id } = JSON.parse(user);
            api.defaults.headers.common['_id'] = _id;
            setData(JSON.parse(user));
        }

        // Clean up any resources or subscriptions here if needed
        return () => {
            // Cleanup code goes here
        };
    }, []);

    return data;
};

export default useAuth;