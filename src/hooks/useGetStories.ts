import { useState, useEffect } from "react";
import { StoryType } from "../types/storyType";
import { getTopStories, getItemsByIds } from "../api/hackerNews";

const seconds = 30;

export function useGetStories() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [topStories, setTopStories] = useState<StoryType[]>([]);

  const fetchData = () => {
    const getStories = async () => {
      try {
        const storiesIds = await getTopStories();
        const stories = await getItemsByIds(storiesIds);
        setTopStories(stories);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getStories();
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 1000 * seconds);
    return () => clearInterval(interval);
  }, []);

  return { topStories, isLoading, isError, fetchData };
}
