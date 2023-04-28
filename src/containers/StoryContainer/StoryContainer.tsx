import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { StoryPage } from "../../components/StoryPage/StoryPage";
import { useGetStory } from "../../hooks/useGetStory";
import "./StoryContainer.scss";

export function StoryContainer(): JSX.Element {
  const { id } = useParams();

  const { isLoading, story } = useGetStory(Number(id));
  const navigate = useNavigate();

  const onBackClick = () => {
    navigate(`/Hacker-News`);
  };

  return (
    <div className="story-container">
      {isLoading && <Loader />}
      {story && (
        <div>
          <button
            type="button"
            onClick={onBackClick}
            className="story-container__back-btn"
          >
            <span>&#60;</span> Back
          </button>
          <StoryPage story={story} />
        </div>
      )}
    </div>
  );
}
