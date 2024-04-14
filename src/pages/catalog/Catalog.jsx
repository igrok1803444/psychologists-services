import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FilterZone } from "components/filter-zone/FilterZone";
import { ModalStyles } from "components/modal/Modal.styled";
import { ModalInfo } from "components/modal/modal-info/ModalInfo";
import ReactModal from "react-modal";

import { selectModalIsOpen } from "redux/modal/selectors";
import { closeModal } from "redux/modal/modalSlice";

import { Preview } from "./Catalog.styled";
// import { NoResultText } from "components/no-result- text/NoResultText";
import { LoadMore } from "components/load-more/LoadMore";
import { selectSpecialists } from "redux/specialists/selectors";
import { SpecialistsList } from "components/specialists-list/SpecialistsList";
import { Main } from "styles/Main";

const Catalog = () => {
  const dispatch = useDispatch();

  const specialists = useSelector(selectSpecialists);
  const modalIsOpen = useSelector(selectModalIsOpen);

  const [number, setNumber] = useState(3);

  const [visibleSpecialists, setVisibleSpecialists] = useState([]);

  const handleModalClose = (event) => {
    event.preventDefault();
    dispatch(closeModal());
  };

  useEffect(() => {
    setVisibleSpecialists(specialists.slice(0, number));
  }, [specialists, number]);

  useEffect(() => {
    dispatch(closeModal());
  }, [dispatch]);
  return (
    <>
      <Main>
        <div className="container">
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

export default Catalog;
