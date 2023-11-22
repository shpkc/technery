export interface PostItemInterface {
  id: number;
  title: string;
  description: string;
  link: string;
  thumbnail: string;
  category: string;
  created_at: string;
}

export type PostsListResponse = PostItemInterface[];
