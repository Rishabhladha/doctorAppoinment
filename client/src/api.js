import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'https://doctorappoinment-89og.onrender.com',
});

export default api;
