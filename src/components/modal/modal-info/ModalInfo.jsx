import { useDispatch, useSelector } from "react-redux";

import { closeModal } from "redux/modal/modalSlice";
import { selectModalData } from "redux/modal/selectors";
import {
  ModalCarDescription,
  ModalCarInfoWrapper,
  ModalCarName,
  ModalCloseIcon,
  ModalInfoWrapper,
  ModalLink,
  ModalSubTitle,
} from "./ModalInfo.styled";

import { ActionText } from "styles/ActionText";
import { ConditionsList } from "components/conditions-list/ConditionsList";

export const ModalInfo = () => {
  const dispatch = useDispatch();
  const modalData = useSelector(selectModalData);

  const handleModalClose = (event) => {
    event.preventDefault();
    dispatch(closeModal());
  };
  return (
    <ModalInfoWrapper>
      <ModalCloseIcon onClick={handleModalClose} />

      <ModalCarInfoWrapper>
        <ModalCarName>
          <ActionText> </ActionText>,
        </ModalCarName>

        <ModalCarDescription></ModalCarDescription>
        <ModalSubTitle> Accessories and functionalities:</ModalSubTitle>

        <ModalSubTitle>Rental Condidions:</ModalSubTitle>
        <ConditionsList listInfo={modalData} />
        <ModalLink href="tel:+380730000000">Rental car</ModalLink>
      </ModalCarInfoWrapper>
    </ModalInfoWrapper>
  );
};
