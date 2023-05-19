import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {

  const breedOptions = [
    { value: '1', label: 'Breed 1' },
    { value: '2', label: 'Breed 2' },
    { value: '3', label: 'Breed 3' },
  ];
  const setSelectedBreedId = jest.fn();

  it('renders Navbar component with correct props', () => {
    render(
      <Navbar
        breedOptions={breedOptions}
        allBreeds={[]}
        setSelectedBreedId={setSelectedBreedId}
      />
    );

    const navbar = screen.getByTestId('navbar');
    const searchSelect = screen.getByText('Search breeds here..');

    expect(navbar).toBeInTheDocument();
    expect(searchSelect).toBeInTheDocument();
  });
});

