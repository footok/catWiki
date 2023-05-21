import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Navbar from './Navbar';

describe('Navbar', () => {
  const breedOptions = [
    { value: '1', label: 'Aegean' },
    { value: '2', label: 'Bengal' },
    { value: '3', label: 'Korat' },
  ];
  const setSelectedBreedId = jest.fn();

  it('renders Navbar component', () => {
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

  it('renders breed options when click on the search bar', async () => {
    render(
      <Navbar
        breedOptions={breedOptions}
        allBreeds={[]}
        setSelectedBreedId={setSelectedBreedId}
      />
    );

    await userEvent.click(screen.getByText('Search breeds here..'))

    expect(await screen.findByText('Aegean')).toBeVisible();
    expect(await screen.findByText('Bengal')).toBeVisible();
    expect(screen.getByText('Aegean')).toBeInTheDocument();
    expect(screen.getByText('Bengal')).toBeInTheDocument();
    expect(screen.queryByText('Random')).toBeNull();
  });
});

