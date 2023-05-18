import axios from 'axios';

export const fetchBreeds = () => axios.get('/cats/breeds');
export const fetchBreedImagesById = (id) => axios.get(`/cats/breed/${id}/images`);
