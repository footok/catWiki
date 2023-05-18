import express from 'express';

import { getBreeds, getBreedImagesById } from '../controllers/cats.js'

const router = express.Router();

router.get('/breeds', getBreeds);
router.get('/breed/:id/images', getBreedImagesById);

export default router;
