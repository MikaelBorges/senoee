import { StoryType } from "../types/storyType";

export const getItemsByIds = async (arrayID: number[]) => {
  const pretty = "";
  const data: StoryType[] = await Promise.all(
    arrayID.map((id) =>
      fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=${pretty}`
      ).then((response) => response.json())
    )
  );

  return data;
};

export const getNewAndTopStories = async () => {
  const pretty = "";
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/topstories.json?print=${pretty}`
  );
  const result: number[] = await res.json();
  return result;
};