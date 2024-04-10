import { useDispatch, useSelector } from "react-redux";
import { LoadMoreButton } from "./loadMore.styled";
import { selectFilter } from "redux/filter/selectors";
import { selectPage } from "redux/cars/selectors";
import { loadMore } from "redux/cars/operations";

export const LoadMore = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const { make } = useSelector(selectFilter);

  return (
    <LoadMoreButton
      type="button"
      onClick={() => {
        dispatch(loadMore({ page, make }));
      }}
    >
      Load More
    </LoadMoreButton>
  );
};
