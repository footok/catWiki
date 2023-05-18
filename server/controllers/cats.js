import axios from 'axios';

export const getBreeds = async (req, res) => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds')
    res.json(response.data);
  } catch (error) {
    console.error('An error occurred while fetching cat image:', error);
    res.status(500).json({ error: 'An error occurred while fetching cat image' });
  }
}
