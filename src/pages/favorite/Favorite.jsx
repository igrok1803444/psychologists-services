import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { selectUsersFavorites } from "redux/favorite/selectors";
import { selectModalIsOpen } from "redux/modal/selectors";
import { closeModal } from "redux/modal/modalSlice";

import { NoResultText } from "components/no-result- text/NoResultText";

import ReactModal from "react-modal";
import { ModalStyles } from "components/modal/Modal.styled";
import { ModalInfo } from "components/modal/modal-info/ModalInfo";
import { Preview } from "pages/catalog/Catalog.styled";
import { FilterZone } from "components/filter-zone/FilterZone";
import { SpecialistsList } from "components/specialists-list/SpecialistsList";
import { LoadMore } from "components/load-more/LoadMore";
import { Main } from "styles/Main";

const Favorite = () => {
  const dispatch = useDispatch();

  const [number, setNumber] = useState(3);

  const [visibleSpecialists, setVisibleSpecialists] = useState([]);

  const isLoading = false;
  const favoriteList = useSelector(selectUsersFavorites);
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
  }, [dispatch]);
  return (
    <>
      <Main>
        <div className="container">
          {!isLoading && favoriteList.length === 0 && <NoResultText />}

          <Preview>
            <FilterZone></FilterZone>

            <SpecialistsList specialists={visibleSpecialists} />

            <LoadMore
              onClick={() => {
                setNumber((prevNumber) => prevNumber + 3);
              }}
            />
          </Preview>
        </div>
      </Main>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        appElement={document.body}
        style={ModalStyles}
      >
        <ModalInfo></ModalInfo>
      </ReactModal>
    </>
  );
};

export default Favorite;
