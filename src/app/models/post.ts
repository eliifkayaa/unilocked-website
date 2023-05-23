import { Profile } from './profile';

export interface Post {
  _id?: string;
  text: string;
  images: string[];
  postedBy?: Profile;
  createdAt?: string;
  updatedAt?: string;
  reactionsCounts?: Reactions;
  commentCount?: number;
}

export interface Reactions {
  like: number;
  dislike: number;
}
