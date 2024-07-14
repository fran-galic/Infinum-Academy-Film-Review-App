/* 
   + 1. check if component contains image element (with provided url) 
   + 2. check if show title is rendered
   + 3. check if correct average rating is rendered
*/
import { render, screen } from '@testing-library/react';
import { ShowCard } from './ShowCard';
import { IShow } from '@/typings/show';
import { Fragment } from 'react';

describe("ShowCard", () => {

   const mockShow1: IShow = 		{
      "id": "108",
      "average_rating": 4,
      "description": "Follows teenager Clay Jensen, in his quest to uncover the story behind his classmate and crush, Hannah, and her decision to end her life.",
      "image_url": "https://picsum.photos/400/600?random=3",
      "no_of_reviews": 6,
      "title": "13 Reasons Why"
   };

   const mockShow2: IShow = 		{
      "id": "108",
      "average_rating": undefined,
      "description": "Follows teenager Clay Jensen, in his quest to uncover the story behind his classmate and crush, Hannah, and her decision to end her life.",
      "image_url": "https://picsum.photos/400/600?random=3",
      "no_of_reviews": 6,
      "title": "13 Reasons Why"
   };

   it("should contain image element (with provided url)", () => {
      //react testing library rendera stvari
      render(<ShowCard show={mockShow1} />);

      //objekt iz react testing librarya da dohvati upravo renderane stvair iz Virtualnog DOM-a
      // screen.getByRole("img") bi sam trebao vratit HTMLImageElement ali nije na odmet da to i eksplicitno i definiramo
      const Image = screen.getByRole("img") as HTMLImageElement;

      //jest s ovime testira stvari
      expect(Image).toBeInTheDocument();
      expect(Image.src).toBeTruthy(); // Provjerava da src nije prazan
   });

})