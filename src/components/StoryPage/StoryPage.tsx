import React from "react";
import { IStoryItem } from "../../interfaces";
import { Comments } from "../Comments/Comments";
import "./StoryPage.scss";

interface IStoryPageProps {
  story: IStoryItem;
}

export function StoryPage({
  story: { url, title, by, time, kids, id },
}: IStoryPageProps): JSX.Element {
  return (
    <div className="story-page">
      <div className="story-page__title">
        <a href={url}>{title}</a>
      </div>
      <div className="story-page__info">
        <span className="story-page__author">author {by}</span>
        <span>
          {new Date(time * 1000).toLocaleDateString("en-US", {
            hour: "numeric",
            minute: "numeric",
          })}
        </span>
      </div>
      <div className="story-page__comments">
        <Comments id={id} kids={kids as number[]} />
      </div>
    </div>
  );
}
