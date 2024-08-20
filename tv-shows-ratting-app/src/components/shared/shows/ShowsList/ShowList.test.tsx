/* 
   + 1. check if all the provided shows are rendered
*/

import { IShow } from '@/typings/Show.type';
import { render, screen } from '@testing-library/react';
import { ShowsList } from './ShowsList';
import { ShowCard } from '../ShowCard/ShowCard';

jest.mock('../ShowCard/ShowCard', () => ({
  ShowCard: jest.fn(({ show }) => <div>{show.title}</div>),
}));

describe('ShowsList', () => {
  const mockShows: Array<IShow> = [
    {
      title: 'Amazing Show 1',
      description: 'This is an amazing show that you will love!',
      id: '1',
      image_url:
        'https://via.placeholder.com/600x400/0000FF/808080?text=Amazing+Show+1',
      average_rating: 8.5,
      no_of_reviews: 100,
    },
    {
      title: 'Fantastic Show 2',
      description: 'A fantastic show with a thrilling storyline.',
      id: '2',
      image_url:
        'https://via.placeholder.com/600x400/FF0000/FFFFFF?text=Fantastic+Show+2',
      average_rating: 9.0,
      no_of_reviews: 150,
    },
    {
      title: 'Incredible Show 3',
      description:
        'An incredible show that keeps you on the edge of your seat.',
      id: '3',
      image_url:
        'https://via.placeholder.com/600x400/00FF00/000000?text=Incredible+Show+3',
      average_rating: 7.5,
      no_of_reviews: 75,
    },
    {
      title: 'Marvelous Show 4',
      description: 'A marvelous show with stunning visuals and great acting.',
      id: '4',
      image_url:
        'https://via.placeholder.com/600x400/FFFF00/000000?text=Marvelous+Show+4',
      average_rating: 8.8,
      no_of_reviews: 120,
    },
  ];

  it('should render all shows', () => {
    render(<ShowsList shows={mockShows} />);
    const showsNumber = screen.getAllByText(/Show/).length;
    expect(showsNumber).toEqual(mockShows.length);
  });

  it('should call ShowCard with appropriate props', () => {
    render(<ShowsList shows={mockShows} />);
    mockShows.forEach((show, index) => {
      expect(ShowCard).toHaveBeenNthCalledWith(index + 1, { show }, {});
    });
  });
});
