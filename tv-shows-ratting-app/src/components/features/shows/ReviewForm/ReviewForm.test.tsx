/* 
   + 1. check if related input comment is rendered
   + 2. check if rating component is rendered
   + 3. check if button component is rendered
*/

import { ReviewForm } from './ReviewForm';
import { render, screen } from '@testing-library/react';

describe('ReviewForm', () => {
  it('should render input comment', () => {
    render(<ReviewForm show_id={''} />);
    const inputComment = screen.getByPlaceholderText('Add review');
    expect(inputComment).toBeInTheDocument();
  });

  //u ovom slucaju star-rating
  it('should render rating component', () => {
    render(<ReviewForm show_id={''} />);
    const starRating = screen.getByTestId('star-rating');
    expect(starRating).toBeInTheDocument();
  });

  it('should render button component', () => {
    render(<ReviewForm show_id={''} />);
    const postButton = screen.getByRole('button');
    expect(postButton).toBeInTheDocument();
  });
});
