import { LoadMoreButton } from "./loadMore.styled";

export const LoadMore = ({ onClick }) => {
  return (
    <LoadMoreButton type="button" onClick={onClick}>
      Load More
    </LoadMoreButton>
  );
};
