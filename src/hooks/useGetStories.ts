import { useState, useEffect } from "react";
import { StoryType } from "../types/storyType";
import { getNewAndTopStories, getItemsByIds } from "../api/hackerNews";

const seconds = 30;

export function useGetStories() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [newAndTopStories, setNewAndTopStories] = useState<StoryType[]>([]);

  const fetchData = () => {
    const getStories = async () => {
      try {
        const storiesIds = await getNewAndTopStories();
        const stories = await getItemsByIds(storiesIds);
        setNewAndTopStories(stories);
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

  return { newAndTopStories, isLoading, isError, fetchData };
}
