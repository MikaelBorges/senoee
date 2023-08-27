import { Story } from "../story/story";
import { TfiReload } from "react-icons/tfi";
import "./stories.css";
import { useState } from "react";
import { StoryType } from "../../types/storyType";
import { Button } from "../button/button";

type StoriesProps = {
  topStories: StoryType[];
  fetchData: () => void;
};

export function Stories({ topStories, fetchData }: StoriesProps) {
  const [visibleNews, setVisibleNews] = useState<number>(20);
  const visibleStories = topStories.slice(0, visibleNews);

  return (
    <div className="news">
      <div className="header-news">
        <h3>HackerNews</h3>
        <Button actionOnClick={fetchData} classname="button-icon">
          <TfiReload />
        </Button>
      </div>
      <ol className="stories">
        {visibleStories.map((story) => (
          <Story key={story.id} story={story} />
        ))}
      </ol>
      <Button actionOnClick={() => setVisibleNews((visibleNews) => visibleNews + 20)} classname="button-text">
        More
      </Button>
    </div>
  );
}
