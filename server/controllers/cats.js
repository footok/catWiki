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

export const getBreedImagesById = async (req, res) => {
  try {
    const url = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${req.params.id}`
    const response = await axios.get(url)
    console.log('response:', response)
    res.json(response.data);
  } catch (error) {
    console.error('An error occurred while fetching cat image:', error);
    res.status(500).json({ error: 'An error occurred while fetching cat image' });
  }
}
