import { Rating } from "components/rating/Rating";
import {
  ComentatorDataWrapper,
  ComentatorFirstLetter,
  ComentatorProfileWrapper,
  CommentText,
  CommentatorName,
  CommentatorNameWrapper,
  CommenttionLI,
  RatingRext,
} from "./CommentsListItem.styled";

export const CommentsListItem = ({ comment }) => {
  const { reviewer, rating, comment: commentText } = comment;
  return (
    <CommenttionLI>
      <ComentatorDataWrapper>
        <ComentatorProfileWrapper>
          <ComentatorFirstLetter>
            {reviewer.slice(0, 1).toUpperCase()}
          </ComentatorFirstLetter>
        </ComentatorProfileWrapper>
        <CommentatorNameWrapper>
          <CommentatorName>{reviewer}</CommentatorName>
          <Rating>
            <RatingRext>{rating}</RatingRext>
          </Rating>
        </CommentatorNameWrapper>
      </ComentatorDataWrapper>
      <CommentText>{commentText}</CommentText>
    </CommenttionLI>
  );
};
