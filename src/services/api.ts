import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localgost:3333',
});

export default api;
