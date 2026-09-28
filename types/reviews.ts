export interface GoogleReview {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  date: string;
  text: string;
  reviewUrl?: string;
}
