import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FilterZone } from "components/filter-zone/FilterZone";
import ReactModal from "react-modal";
import { selectModalIsOpen } from "redux/modal/selectors";
import { closeModal } from "redux/modal/modalSlice";
import { Preview } from "./Catalog.styled";
import { LoadMore } from "components/load-more/LoadMore";
import { selectOrderedSpecialists } from "redux/specialists/selectors";
import { SpecialistsList } from "components/specialists-list/SpecialistsList";
import { Main } from "styles/Main";
import { RegisterConsultationForm } from "components/register-consultation-form/RegisterConsultationForm";
import { NoResultText } from "components/no-result- text/NoResultText";

import { setFilter } from "redux/filter/filterSlice";

const Catalog = ({ modalStyles }) => {
  const dispatch = useDispatch();

  const specialists = useSelector(selectOrderedSpecialists);
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
    dispatch(setFilter("all"));
  }, [dispatch]);
  return (
    <>
      <Main>
        <div className="container">
          <Preview>
            <FilterZone></FilterZone>

            <SpecialistsList specialists={visibleSpecialists} />
            {visibleSpecialists.length === 0 && <NoResultText />}

            {visibleSpecialists.length < specialists.length && (
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
      >
        <RegisterConsultationForm />
      </ReactModal>
    </>
  );
};

export default Catalog;
