import { CommentsListStyled } from "./CommentsList.styled";
import { CommentsListItem } from "./comments-list-item/CommentsListItem";

export const CommentsList = ({ dataArray, styles }) => {
  return (
    <CommentsListStyled style={styles}>
      {dataArray.map((item, index) => {
        if (item) {
          return <CommentsListItem key={index} comment={item} />;
        }
        return null;
      })}
    </CommentsListStyled>
  );
};
