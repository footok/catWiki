import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { fetchBreeds } from './api';

jest.mock('./api', () => ({
  fetchBreeds: jest.fn(),
}));

describe('App', () => {
  beforeEach(() => {
    fetchBreeds.mockResolvedValue({
      data: [
        { id: 1, name: 'Foo' },
        { id: 2, name: 'Bar' },
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
    expect(navbarComponent).toBeInTheDocument();
  });

  it('should not render BreedDetails component', async () => {
    render(<App />);

    const breedDetailsComponent = screen.queryByTestId('breed-details');
    expect(breedDetailsComponent).toBeNull();
  });
});

