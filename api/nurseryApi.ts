
import axios from 'axios';

const nurseryApi = axios.create({
    baseURL: '/api'
});

export default nurseryApi;