import axios from 'axios';

// Create Axios instance with default configuration
const api = axios.create({
  baseURL: 'http://localhost:3031',
  timeout: 6000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
