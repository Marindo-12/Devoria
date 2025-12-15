export interface Project {
  id: string;
  devId: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  views: number;
  likes: number;
  reviews: Review;
  price: string;
  business: Bussiness;
  about: string;
  comments: Comments[];
}

interface Bussiness {
  timeEstimate: string;
  supportDuration: string;
}

interface Review {
  rate: number;
  review: number;
}

interface Comments {
  id: string;
  userId?: number;
  username?: string;
  text: string;
  likes: number;
  createdAt: string;
  userLiked?: boolean;
}
