import React from "react";
import { IStoryItem } from "../../interfaces";
import { StoriesListItem } from "../StoriesListItem/StoriesListItem";
import "./StoriesList.scss";

interface IStoryListProps {
  stories: IStoryItem[];
}

export function StoriesList({ stories }: IStoryListProps): JSX.Element {
  return (
    <ul className="stories-list">
      {stories.map((el) => (
        <li key={el.id} className="stories-list__item">
          <StoriesListItem story={el} />
        </li>
      ))}
    </ul>
  );
}
