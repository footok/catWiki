import { render, waitFor, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import userEvent from '@testing-library/user-event'

import App from './App';
import { fetchBreedImagesById, fetchBreeds } from './api';

jest.mock('./api', () => ({
  fetchBreedImagesById: jest.fn(),
  fetchBreeds: jest.fn(),
}));

describe('App', () => {
  beforeEach(() => {
    fetchBreedImagesById.mockResolvedValue({
      data: [
        { url: 'image1.jpg' },
        { url: 'image2.jpg' },
        { url: 'image3.jpg' }
      ],
    })

    fetchBreeds.mockResolvedValue({
      data: [
        { id: 1, name: 'Aegean' },
        { id: 2, name: 'Bengal' },
      ],
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('fetches breeds when components rendered', async () => {
    render(<App />);
    await waitFor(() => expect(fetchBreeds).toHaveBeenCalledTimes(1));
  });

  it('renders Navbar component', async () => {
    render(<App />);
    const navbarComponent = screen.getByTestId('navbar');
    await waitFor(() => {
      expect(navbarComponent).toBeInTheDocument();
    })
  });

  it('should not render BreedDetails component at initial render', async () => {
    render(<App />);

    const breedDetailsComponent = screen.queryByTestId('breed-details');
    await waitFor(() => expect(breedDetailsComponent).toBeNull())
  });

  it('should render BreedDetails when user clicks a breed option from the list', async () => {
    render(<App />);

    await userEvent.click(screen.getByText('Search breeds here..'))
    await screen.findByText('Aegean')
    await userEvent.click(screen.getByText('Aegean'))

    const breedDetailsComponent = screen.queryByTestId('breed-details');
    await waitFor(() => expect(breedDetailsComponent).toBeInTheDocument())
  });
});

