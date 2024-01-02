import { TopicInterface } from "./topics";

export interface ServiceImgInterface {
  url: string;
}

export interface ServicesInterface {
  id: string;
  name: string;
  summary: string;
  likeCount: number;
  description: string;
  link: string;
  thumbnail: string;
  images: Array<ServiceImgInterface>;
  topics: TopicInterface;
}
