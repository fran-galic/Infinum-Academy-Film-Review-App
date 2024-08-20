export interface IShow {
  title: string;
  description: string;
  average_rating?: number;
  image_url?: string;
  id: string /* za sada opcionalan */;
  no_of_reviews: number;
}
