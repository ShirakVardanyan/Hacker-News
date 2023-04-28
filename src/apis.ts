import axios from "axios";
import { BASE_API_URL } from "./constants";
import { ICommentData, IStoryItem, StoryType } from "./interfaces";

export const getStory = async (id: Number): Promise<IStoryItem | any> => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story.data;
  } catch (error) {
    console.log("Error while getting a story.");
  }
};

export const getStories = async (
  type: StoryType,
  count: number
): Promise<IStoryItem[] | any> => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}.json?limitToFirst=${count}&orderBy="$key"`
    );
    const stories = await Promise.all(storyIds.slice(0, 100).map(getStory));

    return stories.sort((a, b) => a.time - b.time);
  } catch (error) {
    console.log("Error while getting list of stories.");
  }
};

export const getComment = async (id: number): Promise<ICommentData | any> => {
  try {
    const comment = await axios.get(`${BASE_API_URL}/item/${id}.json`);

    return comment.data;
  } catch (error) {
    console.log("Error while getting comment.");
  }
};
