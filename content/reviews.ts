export type GoogleReview = {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  date: string;
  text: string;
  reviewUrl?: string;
};

// IMPORTANT: Replace this placeholder data with your real Google Business reviews.
// Do not use fake reviews in production.
export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "1",
    name: "Customer Name",
    rating: 5,
    date: "2 months ago",
    text: "Excellent service and great quality printing. The team was very helpful with my project and delivered on time.",
    // avatar: "/images/reviews/avatar1.jpg", // Add real avatar URL if available
    // reviewUrl: "https://g.page/...", // Add real review URL if available
  },
  {
    id: "2",
    name: "Customer Name",
    rating: 5,
    date: "5 months ago",
    text: "Very professional and fast turnaround. They helped me optimize my 3D model before printing which saved time and material.",
  },
  {
    id: "3",
    name: "Customer Name",
    rating: 5,
    date: "1 year ago",
    text: "Great communication and the final parts fit perfectly. Highly recommended for any engineering or prototyping work in the area.",
  },
  {
    id: "4",
    name: "Customer Name",
    rating: 5,
    date: "2 years ago",
    text: "Quality and fast service. Really happy with the results of my prototype.",
  }
];
