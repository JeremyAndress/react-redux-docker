import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://testing.qin.cl:8035/api/v1/',
    timeout: 1000,
    headers: {'accept': 'application/json'}
});