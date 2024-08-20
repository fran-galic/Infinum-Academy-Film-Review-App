export interface IReview {
  id: number;
  comment: string;
  rating: number;
  show_id: number;
  user: {
    id: number;
    email?: string;
    image_url?: string;
  };
}

export interface IReviewList {
  reviews: Array<IReview>;
}

export interface ICreateReviewData {
  comment: string;
  rating: number;
  show_id: string;
}

export interface IEditReviewData extends ICreateReviewData {}
