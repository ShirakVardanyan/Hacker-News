import React, { useEffect } from "react";
import { Loader } from "../../components/Loader/Loader";
import { StoriesList } from "../../components/StoriesList/StoriesList";
import { useGetStories } from "../../hooks/useGetStories";
import { StoryType } from "../../interfaces";
import "./StoriesListContainer.scss";

export function StoriesListContainer(): JSX.Element {
  const { isLoading, getStories, stories } = useGetStories(StoryType.new, 100);

  useEffect(() => {
    const timer = setInterval(() => {
      getStories();
    }, 60000);

    return () => clearInterval(timer);
  }, [getStories]);

  return (
    <div className="stories-list-container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header className="stories-list-container__header">
            <h1>Hacker News</h1>
            <button
              className="stories-list-container__btn"
              onClick={getStories}
            >
              UPDATE
            </button>
          </header>
          {stories && <StoriesList stories={stories} />}
        </>
      )}
    </div>
  );
}
