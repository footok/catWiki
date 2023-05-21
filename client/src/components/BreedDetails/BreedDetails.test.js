import React from 'react';
import { act, render, waitFor, screen } from '@testing-library/react';
import BreedDetails from './';
import { fetchBreedImagesById } from '../../api';

jest.mock('../../api', () => ({
  fetchBreedImagesById: jest.fn()
}));

describe('BreedDetails', () => {
  beforeEach(() => {
    fetchBreedImagesById.mockResolvedValue({
      data: [
        { url: 'image1.jpg' },
        { url: 'image2.jpg' },
        { url: 'image3.jpg' }
      ],
    })
  })

  const allBreeds = [
    { id: 1, name: 'Aegean' },
    { id: 2, name: 'Bengal' },
    { id: 3, name: 'Korat' }
  ];

  it('renders breed details', async () => {
    const selectedBreedId = 2;
    render(<BreedDetails allBreeds={allBreeds} selectedBreedId={selectedBreedId} />);

    expect(await screen.findByTestId('breed-details')).toBeInTheDocument();
    expect(screen.getByText('Breed: Bengal')).toBeInTheDocument();
    expect(screen.getByText('Details')).toBeInTheDocument();
    expect(screen.getByText('Other Images of Bengal')).toBeInTheDocument();
    expect(screen.getByAltText('Cat0')).toBeInTheDocument();
    expect(screen.getByAltText('Cat1')).toBeInTheDocument();
  });

  it('should not render images if no images ruturned', async () => {
    fetchBreedImagesById.mockResolvedValue({
      data: []
    })

    render(<BreedDetails allBreeds={allBreeds} selectedBreedId={1} />);
    await waitFor(() => expect(screen.queryByText('Cat0')).toBeNull())
    expect(screen.queryByText('Cat1')).toBeNull();

  });

  it('fetches breed images when selected breed changes', async () => {
    const selectedBreedId = 3;
    render(<BreedDetails allBreeds={allBreeds} selectedBreedId={1} />);

    expect(fetchBreedImagesById).toHaveBeenCalledTimes(1);
    expect(fetchBreedImagesById).toHaveBeenCalledWith(1);

    render(<BreedDetails allBreeds={allBreeds} selectedBreedId={selectedBreedId} />);

    await waitFor(() => expect(fetchBreedImagesById).toHaveBeenCalledWith(selectedBreedId));
    expect(fetchBreedImagesById).toHaveBeenCalledWith(selectedBreedId);
  });
});

