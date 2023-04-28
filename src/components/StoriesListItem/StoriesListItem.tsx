import React from "react";
import { useNavigate } from "react-router-dom";
import { IStoryItem } from "../../interfaces";

import "./StoriesListItem.scss";

interface IStoryListProps {
  story: IStoryItem;
}

export function StoriesListItem({
  story: { url, title, by, time, kids, id, score },
}: IStoryListProps): JSX.Element {
  const navigate = useNavigate();

  const onClick = (id: number): void => {
    navigate(`news/${id}`);
  };

  return (
    <button onClick={() => onClick(id)} className="stories-list-item">
      <div className="stories-list-item__title">{title}</div>
      <div className="stories-list-item__info">
        <div className="stories-list-item__info-col">
          <span className="stories-list-item__author">
            by: <i>{by} </i>
          </span>
          <span className="stories-list-item__date">
            {new Date(time * 1000).toLocaleDateString("en-US", {
              hour: "numeric",
              minute: "numeric",
            })}
          </span>
        </div>
        <div className="stories-list-item__info-col">
          <span>score {score}</span>
          <span>{`comments ${kids && kids.length > 0 ? kids.length : 0}`}</span>
        </div>
      </div>
    </button>
  );
}
