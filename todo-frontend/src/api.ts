import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_DOMAIN;
console.log("🚀 ~ API_BASE_URL:", API_BASE_URL)

// Create an instance of Axios with the base URL
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;