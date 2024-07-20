export interface IReview {
   id: number,
   comment: string,
   rating: number,
   show_id: number,
   user: {
      id: number,
      email?: string,
      image_url?: null
   }
}

export interface IReviewList {
   reviews: Array<IReview>
}

export interface ICreateReviewData {
	comment: string,
   rating: number,
   show_id: string
}
