import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RingLoader } from "react-spinners";
import { FilterZone } from "components/filter-zone/FilterZone";
import { ModalStyles } from "components/modal/Modal.styled";
import { ModalInfo } from "components/modal/modal-info/ModalInfo";
import ReactModal from "react-modal";
import { themeGreen } from "styles/theme";
import { selectIsLoading, selectVisibleCars } from "redux/cars/selectors";
import { selectModalIsOpen } from "redux/modal/selectors";
import { closeModal } from "redux/modal/modalSlice";

import { getCars } from "redux/cars/operations";
import { CarsList } from "components/cars-list/CarsList";
import { Preview } from "./Catalog.styled";
import { NoResultText } from "components/no-result- text/NoResultText";
import { LoadMore } from "components/load-more/LoadMore";

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectVisibleCars);
  const isLoading = useSelector(selectIsLoading);
  const modalIsOpen = useSelector(selectModalIsOpen);

  const handleModalClose = (event) => {
    event.preventDefault();
    dispatch(closeModal());
  };
  useEffect(() => {
    dispatch(getCars());
    dispatch(closeModal());
  }, [dispatch]);
  return (
    <>
      <main>
        <div className="container">
          <FilterZone></FilterZone>

          <Preview>
            {cars.length > 0 && <CarsList cars={cars} />}
            {!isLoading && cars.length === 0 && <NoResultText />}
            <RingLoader
              cssOverride={{ margin: "24px auto" }}
              color={themeGreen.colors.background.spiner}
              loading={isLoading}
            />
            {!isLoading && cars.length >= 12 && <LoadMore />}
          </Preview>
        </div>
      </main>
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
