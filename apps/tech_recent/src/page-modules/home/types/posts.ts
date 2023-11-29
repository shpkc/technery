export interface PostItemInterface {
  id: number;
  title: string;
  description: string;
  link: string;
  thumbnail: string;
  category: string;
  author: string;
  created_at: string;
}

export type PostsListResponse = PostItemInterface[];
