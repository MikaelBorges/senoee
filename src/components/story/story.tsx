import "./story.css";
import { StoryType } from "../../types/storyType";

type StoryProps = {
  story: StoryType;
};

export function Story({ story }: StoryProps) {
  const { title, url, score, by, time, descendants } = story;

  const convertToDate = (time: number) => {
    const timestamp = Date.now();
    const stringTimestamp = timestamp.toString();
    const shortStringTimestamp = stringTimestamp.slice(0, 10);
    const shortIntTimestamp = parseInt(shortStringTimestamp);
    const difference = shortIntTimestamp - time;
    const minutes = difference / 60;
    const hours = minutes / 60;
    const hoursFormatted = Math.floor(hours);
    if (hours > 2) return hoursFormatted + " hours";
    else return hoursFormatted + " hour";
  };

  return (
    <li className="story">
      {title}
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="gray"
      >{` (${url})`}</a>
      <div className="small-line">
        <span>{`${score} points`}</span>
        <span className="gray"> by </span>
        <span>{by}</span>
        <span className="gray"> {convertToDate(time)} ago</span>
        <span>{` | ${descendants}`} comments</span>
      </div>
    </li>
  );
}
