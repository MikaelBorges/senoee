import { Story } from "../story/story";
import { TfiReload } from "react-icons/tfi";
import "./stories.css";
import { useState } from "react";
import { StoryType } from "../../types/storyType";

type StoriesProps = {
  newAndTopStories: StoryType[];
  fetchData: () => void;
};

export function Stories({ newAndTopStories, fetchData }: StoriesProps) {
  const [visibleNews, setVisibleNews] = useState<number>(20);
  const visibleStories = newAndTopStories.slice(0, visibleNews);

  return (
    <div className="news">
      <div className="header-news">
        <h3>HackerNews</h3>
        <button className="button reload" onClick={() => fetchData()}>
          <TfiReload />
        </button>
      </div>
      <ol className="stories">
        {visibleStories.map((story) => (
          <Story key={story.id} story={story} />
        ))}
      </ol>
      <button
        className="button more"
        onClick={() => setVisibleNews((visibleNews) => visibleNews + 20)}
      >
        More
      </button>
    </div>
  );
}
