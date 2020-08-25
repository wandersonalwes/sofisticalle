import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.sofisticalle.com',
});

export default api;