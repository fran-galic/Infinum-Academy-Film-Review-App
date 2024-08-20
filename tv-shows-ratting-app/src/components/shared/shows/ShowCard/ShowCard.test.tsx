/* 
   + 1. check if component contains image element (with provided url) 
   + 2. check if show title is rendered
   + 3. check if correct average rating is rendered
*/
import { render, screen } from '@testing-library/react';
import { ShowCard } from './ShowCard';
import { IShow } from '@/typings/Show.type';
import { Fragment } from 'react';

describe('ShowCard', () => {
  const mockShow1: IShow = {
    id: '108',
    average_rating: 4,
    description:
      'Follows teenager Clay Jensen, in his quest to uncover the story behind his classmate and crush, Hannah, and her decision to end her life.',
    image_url: 'https://picsum.photos/400/600?random=3',
    no_of_reviews: 6,
    title: '13 Reasons Why',
  };

  const mockShow2: IShow = {
    id: '108',
    average_rating: undefined,
    description:
      'Follows teenager Clay Jensen, in his quest to uncover the story behind his classmate and crush, Hannah, and her decision to end her life.',
    image_url: 'https://picsum.photos/400/600?random=3',
    no_of_reviews: 6,
    title: '13 Reasons Why',
  };

  it('should contain image element (with provided url)', () => {
    //react testing library rendera stvari
    render(<ShowCard show={mockShow1} />);

    //objekt iz react testing librarya da dohvati upravo renderane stvair iz Virtualnog DOM-a
    // screen.getByRole("img") bi sam trebao vratit HTMLImageElement ali nije na odmet da to i eksplicitno i definiramo
    const Image = screen.getByRole('img') as HTMLImageElement;

    //jest s ovime testira stvari
    expect(Image).toBeInTheDocument();
    expect(Image.src).toBeTruthy(); // Provjerava da src nije prazan
  });

  it('should  render show title', () => {
    //react testing library rendera stvari
    render(<ShowCard show={mockShow1} />);

    const showTitle = screen.getByText(mockShow1.title);

    //jest s ovime testira stvari
    expect(showTitle).toBeInTheDocument();
  });

  it('should  render show title', () => {
    //react testing library rendera stvari
    render(
      <Fragment>
        <ShowCard show={mockShow1} />
        <ShowCard show={mockShow2} />
      </Fragment>
    );

    const averageRating1 = screen.getByText(
      `${mockShow1.average_rating?.toFixed(1)}/5`
    );
    const averageRating2 = screen.getByText('no ratings');

    //jest s ovime testira stvari
    expect(averageRating1).toBeInTheDocument();
    expect(averageRating2).toBeInTheDocument();
  });
});
