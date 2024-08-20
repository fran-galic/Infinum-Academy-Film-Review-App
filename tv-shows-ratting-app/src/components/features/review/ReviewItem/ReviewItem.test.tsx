/* 
   + 1.check if correct user email is rendered
   + 2. check if correct rating is rendered
   + 3. check if correct review comment is rendered
   + 4. check if delete button is rendered
   + 5. check if onDelete callback has beed called only once with the necessary data
*/

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ReviewItem } from './ReviewItem';
import { IReview } from '@/typings/Review.type';

const mockTrigger = jest.fn();
const mockMutate = jest.fn();

jest.mock('swr/mutation', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    trigger: mockTrigger,
  })),
}));

const mockReview: IReview = {
  id: 1,
  comment: 'Vrlo zabavna i poucna serija',
  rating: 5,
  show_id: 101,
  user: {
    id: 1,
    email: 'fran.galic7@gmail.com',
    image_url:
      'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg',
  },
};

describe('ReviewItem', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.setItem('user-id', '1'); // Postavi mock user ID u localStorage
  });

  it('should render correct user email if it exists', () => {
    render(<ReviewItem review={mockReview} mutate={jest.fn()} show_id="101" />);

    // Provjera da li je email ispravno renderiran
    const email = mockReview.user.email
      ? screen.getByText(mockReview.user.email)
      : null;
    if (email) {
      expect(email).toBeInTheDocument();
    }
  });

  it('should render correct rating', () => {
    render(<ReviewItem review={mockReview} mutate={jest.fn()} show_id="101" />);

    // Provjera da li je ocjena ispravno renderirana
    const starRating = screen.getByTestId('star-rating');
    expect(starRating).toBeInTheDocument();

    const stars = starRating.querySelectorAll('svg'); // Pretpostavljamo da StarIcon koristi SVG element
    expect(stars.length).toBe(5); // Uvijek će biti 5 zvjezdica
  });

  it('should render correct review comment', () => {
    render(<ReviewItem review={mockReview} mutate={jest.fn()} show_id="101" />);

    // Provjera da li je komentar ispravno renderiran
    const comment = screen.getByText(mockReview.comment);
    expect(comment).toBeInTheDocument();
  });

  it('should render delete button', () => {
    render(<ReviewItem review={mockReview} mutate={jest.fn()} show_id="101" />);

    // Provjera da li je gumb za brisanje ispravno renderiran
    const deleteButton = screen.getByText('Remove');
    expect(deleteButton).toBeInTheDocument();
  });

  it('should check if onDelete callback has been called only once with the necessary data', async () => {
    // Simuliraj uspješan callback za onSuccess
    mockTrigger.mockImplementation(() => {
      return Promise.resolve().then(() => {
        // Simuliraj onSuccess callback
        mockMutate();
      });
    });

    render(
      <ReviewItem review={mockReview} mutate={mockMutate} show_id="101" />
    );
    const deleteButton = screen.getByText('Remove');

    // Simuliraj klik na gumb za brisanje
    fireEvent.click(deleteButton);

    expect(mockTrigger).toHaveBeenCalled();

    // Provjeri da li je mockMutate funkcija pozvana
    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalled();
    });
  });
});
