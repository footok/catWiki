import axios from 'axios';

export const fetchBreeds = () => axios.get('/cats/breeds');
