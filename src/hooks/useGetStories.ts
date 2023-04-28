import { useState, useEffect } from "react";
import { getStories } from "../apis";
import { IStoryItem, StoryType } from "../interfaces";

export const useGetStories = (type: StoryType, count: number) => {
  const [isLoading, setIsLoading] = useState(false);
  const [stories, setStories] = useState<IStoryItem[]>([]);

  const fetchData = () => {
    setIsLoading(true);
    getStories(type, count)
      .then((res) => {
        setStories(res);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { getStories: fetchData, isLoading, stories };
};
