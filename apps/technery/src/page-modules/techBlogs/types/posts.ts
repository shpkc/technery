export interface PostItemInterface {
  id: number;
  title: string;
  description: string;
  link: string;
  thumbnail: string;
  category: string;
  author: string;
  viewCount: number;
  created_at: string;
  post_created_at: string;
}

export type PostsListResponse = PostItemInterface[];
