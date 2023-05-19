import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import BreedDetails from './';
import * as api from '../../api';

jest.mock('../../api', () => ({
  fetchBreedImagesById: jest.fn().mockResolvedValue({
    data: [
      { url: 'image1.jpg' },
      { url: 'image2.jpg' },
      { url: 'image3.jpg' }
    ]
  })
}));

describe('BreedDetails', () => {
  const allBreeds = [
    { id: 1, name: 'Breed 1' },
    { id: 2, name: 'Breed 2' },
    { id: 3, name: 'Breed 3' }
  ];

  it('renders breed details', async () => {
    const selectedBreedId = 2;
    render(<BreedDetails allBreeds={allBreeds} selectedBreedId={selectedBreedId} />);

    await waitFor(() => {
      expect(screen.getByTestId('breed-details')).toBeInTheDocument();
      expect(screen.getByText('Breed: Breed 2')).toBeInTheDocument();
      expect(screen.getByText('Details')).toBeInTheDocument();
      expect(screen.getByText('Other Images of Breed 2')).toBeInTheDocument();
    });
  });

  it('fetches breed images when selected breed changes', async () => {
    const selectedBreedId = 3;
    render(<BreedDetails allBreeds={allBreeds} selectedBreedId={1} />);

    expect(api.fetchBreedImagesById).toHaveBeenCalledTimes(1);
    expect(api.fetchBreedImagesById).toHaveBeenCalledWith(1);

    render(<BreedDetails allBreeds={allBreeds} selectedBreedId={selectedBreedId} />);

    await waitFor(() => {
      expect(api.fetchBreedImagesById).toHaveBeenCalledTimes(2);
      expect(api.fetchBreedImagesById).toHaveBeenCalledWith(3);
    });
  });
});

