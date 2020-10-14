import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://10.46.0.160:8005/api/v1/',
    timeout: 1000,
    headers: {'accept': 'application/json'}
});