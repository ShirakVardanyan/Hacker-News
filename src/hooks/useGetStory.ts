import { useState, useEffect } from "react";
import { getStory } from "../apis";
import { IStoryItem } from "../interfaces";

export const useGetStory = (id: number) => {
  const [isLoading, setIsLoading] = useState(false);
  const [story, setStory] = useState<IStoryItem>();

  useEffect(() => {
    setIsLoading(true);
    getStory(id)
      .then((res) => {
        setStory(res);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  return { isLoading, story };
};
