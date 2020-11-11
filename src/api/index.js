import axios from 'axios';
import {API} from '../config';

export const instance = axios.create({
    baseURL: API,
    timeout: 3000,
    headers: {'accept': 'application/json'}
});