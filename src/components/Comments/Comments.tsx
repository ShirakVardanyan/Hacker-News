import React, { useEffect, useState } from "react";
import { getComment } from "../../apis";
import { ICommentData } from "../../interfaces";
import "./Comments.scss";

interface ICommentsProps {
  id: number;
  kids: number[];
}

export function Comments({ id, kids }: ICommentsProps): JSX.Element {
  const [comments, setComments] = useState<ICommentData[]>([]);

  const [nestedComments, setNestedComments] = useState<{
    [id: string]: ICommentData;
  }>();

  useEffect(() => {
    if (kids?.length) {
      kids.forEach((el: number) => {
        getComment(el).then((res) => {
          setComments((val) => [...val, res]);
        });
      });
    }
  }, [id]);

  const onLoadMoreCommentClick = (kids: number[]) => {
    kids.forEach((el: number) => {
      getComment(el).then((res) => {
        setNestedComments((val) => ({ ...val, [el]: res }));
      });
    });
  };

  const renderNestedComments = (el: ICommentData) => {
    if (!nestedComments)
      return (
        <button
          type="button"
          className="comments__cta"
          onClick={() => onLoadMoreCommentClick(el.kids as number[])}
        >
          + {(el.kids as number[]).length}
        </button>
      );
    return Object.keys(nestedComments)?.map((item) =>
      nestedComments[item].parent === el.id ? (
        <div
          key={nestedComments[item].id}
          className="comments__nested-comment comments__list-item"
        >
          <p>{nestedComments[item].by}:</p>
          <div
            className="comments__danger-text"
            dangerouslySetInnerHTML={{ __html: nestedComments[item].text }}
          />
        </div>
      ) : (
        <button
          className="comments__cta"
          type="button"
          onClick={() => onLoadMoreCommentClick(el.kids as number[])}
        >
          + {(el.kids as number[]).length}
        </button>
      )
    );
  };

  return comments?.length ? (
    <ul className="comments__list">
      {comments
        .sort((a, b) => a.time - b.time)
        .map((el: ICommentData) => (
          <li key={el.id}>
            <div className="comments__list-item">
              <p>{el.by}:</p>
              <div
                className="comments__danger-text"
                dangerouslySetInnerHTML={{ __html: el.text }}
              />
            </div>
            {el.kids?.length && renderNestedComments(el)}
          </li>
        ))}
    </ul>
  ) : (
    <>0 comments</>
  );
}
