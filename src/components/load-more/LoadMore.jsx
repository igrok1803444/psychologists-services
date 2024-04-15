import { Button } from "components/button/Button";
import { LoadMoreButtonText } from "./loadMore.styled";

export const LoadMore = ({ onClick }) => {
  return (
    <Button
      type="button"
      style={{ maxWidth: "max-content", margin: "0 auto" }}
      className={"action"}
      onClick={onClick}
    >
      <LoadMoreButtonText>Load More</LoadMoreButtonText>
    </Button>
  );
};
