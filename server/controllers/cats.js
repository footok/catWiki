import axios from 'axios';

const catApi = 'https://api.thecatapi.com/v1'

export const getBreeds = async (req, res) => {
  try {
    const response = await axios.get(`${catApi}/breeds`)
    res.json(response.data);
  } catch (error) {
    console.error('An error occurred while fetching cat image:', error);
    res.status(500).json({ error: 'An error occurred while fetching cat breeds' });
  }
}

export const getBreedImagesById = async (req, res) => {
  try {
    const url = `${catApi}/images/search?limit=10&breed_ids=${req.params.id}`
    const response = await axios.get(url)
    res.json(response.data);
  } catch (error) {
    console.error('An error occurred while fetching cat image:', error);
    res.status(500).json({ error: 'An error occurred while fetching cat images' });
  }
}
