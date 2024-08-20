import { render, screen } from '@testing-library/react';
import { ReviewList } from './ReviewList';
import { ReviewItem } from '../ReviewItem/ReviewItem';
import { IReviewList } from '@/typings/Review.type';

jest.mock('../ReviewItem/ReviewItem', () => ({
  ReviewItem: jest.fn(({ review }) => <div>{review.comment}</div>),
}));

describe('ReviewList', () => {
  const mockReviewList: IReviewList = {
    reviews: [
      {
        id: 1,
        comment: 'Great show!',
        rating: 5,
        show_id: 101,
        user: {
          id: 1,
          email: 'user1@example.com',
          image_url: 'https://example.com/avatar1.png',
        },
      },
      {
        id: 2,
        comment: 'Not bad',
        rating: 3,
        show_id: 101,
        user: {
          id: 2,
          email: 'user2@example.com',
          image_url: 'https://example.com/avatar2.png',
        },
      },
      {
        id: 3,
        comment: 'Could be better',
        rating: 2,
        show_id: 101,
        user: {
          id: 3,
          email: 'user3@example.com',
          image_url: 'https://example.com/avatar3.png',
        },
      },
    ],
  };

  it('should render all reviews', () => {
    render(<ReviewList reviewList={mockReviewList} show_id="101" />);
    const reviewsNumber = screen.getAllByText(
      /Great show!|Not bad|Could be better/
    ).length;
    expect(reviewsNumber).toEqual(mockReviewList.reviews.length);
  });

  it('should call ReviewItem with appropriate props', () => {
    render(<ReviewList reviewList={mockReviewList} show_id="101" />);
    mockReviewList.reviews.forEach((review, index) => {
      expect(ReviewItem).toHaveBeenNthCalledWith(
        index + 1,
        expect.objectContaining({
          review: expect.objectContaining({
            id: review.id,
            comment: review.comment,
            rating: review.rating,
            show_id: review.show_id,
            user: expect.objectContaining({
              id: review.user.id,
              email: review.user.email,
              image_url: review.user.image_url,
            }),
          }),
          mutate: expect.any(Function),
          show_id: '101',
        }),
        {}
      );
    });
  });
});
