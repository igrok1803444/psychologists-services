import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { SelectOrdereFavorites } from "redux/favorite/selectors";
import { selectModalIsOpen } from "redux/modal/selectors";
import { closeModal } from "redux/modal/modalSlice";

import { NoResultText } from "components/no-result- text/NoResultText";

import ReactModal from "react-modal";
import { Preview } from "pages/catalog/Catalog.styled";
import { FilterZone } from "components/filter-zone/FilterZone";
import { SpecialistsList } from "components/specialists-list/SpecialistsList";
import { LoadMore } from "components/load-more/LoadMore";
import { Main } from "styles/Main";
import { setFilter } from "redux/filter/filterSlice";

const Favorite = ({ modalStyles }) => {
  const dispatch = useDispatch();

  const [number, setNumber] = useState(3);

  const [visibleSpecialists, setVisibleSpecialists] = useState([]);

  const favoriteList = useSelector(SelectOrdereFavorites);
  const modalIsOpen = useSelector(selectModalIsOpen);

  const handleModalClose = (event) => {
    event.preventDefault();
    dispatch(closeModal());
  };

  useEffect(() => {
    setVisibleSpecialists(favoriteList.slice(0, number));
  }, [favoriteList, number]);

  useEffect(() => {
    dispatch(closeModal());
    dispatch(setFilter("all"));
  }, [dispatch]);
  return (
    <>
      <Main>
        <div className="container">
          <Preview>
            <FilterZone></FilterZone>

            <SpecialistsList specialists={visibleSpecialists} />
            {favoriteList.length === 0 && <NoResultText />}
            {visibleSpecialists.length < favoriteList && (
              <LoadMore
                onClick={() => {
                  setNumber((prevNumber) => prevNumber + 3);
                }}
              />
            )}
          </Preview>
        </div>
      </Main>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        appElement={document.body}
        style={modalStyles}
      ></ReactModal>
    </>
  );
};

export default Favorite;
