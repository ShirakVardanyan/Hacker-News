export interface IStoryItem {
  by: string;
  descendants: number;
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
  kids?: number[];
}

export interface ICommentData {
  by: string;
  id: number;
  parent: number;
  text: string;
  time: number;
  type: string;
  kids?: number[];
}

export enum StoryType {
  new = "newstories",
  top = "topstories",
  best = "beststories",
}
