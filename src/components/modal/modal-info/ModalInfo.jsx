import { prepareAddress } from "features";
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
import { Img } from "styles/Img";
import { InformationList } from "components/information-list/InformationList";
import { ActionText } from "styles/ActionText";
import { ConditionsList } from "components/conditions-list/ConditionsList";

export const ModalInfo = () => {
  const dispatch = useDispatch();
  const modalData = useSelector(selectModalData);
  const {
    img,
    make,
    year,
    model,

    address,
    rentalCompany,
    accessories,
    type,
    id,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
  } = modalData;

  const carInfoArray = [
    prepareAddress(address)[1],
    prepareAddress(address)[2],
    `id: ${id}`,
    `Year: ${year}`,
    `Type: ${type}`,
    `Fuel Consumption: ${fuelConsumption}`,
    `Engine Size: ${engineSize}`,
  ];

  const handleModalClose = (event) => {
    event.preventDefault();
    dispatch(closeModal());
  };
  return (
    <ModalInfoWrapper>
      <ModalCloseIcon onClick={handleModalClose} />
      <Img src={img} alt={`${make} ${model} ${year} by ${rentalCompany}`} />
      <ModalCarInfoWrapper>
        <ModalCarName>
          {make}
          <ActionText> {model}</ActionText>, {year}
        </ModalCarName>
        <InformationList
          styles={{ maxWidth: "300px", marginBottom: "14px" }}
          dataArray={carInfoArray}
        />
        <ModalCarDescription>{description}</ModalCarDescription>
        <ModalSubTitle> Accessories and functionalities:</ModalSubTitle>

        <InformationList
          styles={{ marginTop: "8px", marginBottom: "0" }}
          dataArray={[...accessories, ...functionalities]}
        />
        <ModalSubTitle>Rental Condidions:</ModalSubTitle>
        <ConditionsList listInfo={modalData} />
        <ModalLink href="tel:+380730000000">Rental car</ModalLink>
      </ModalCarInfoWrapper>
    </ModalInfoWrapper>
  );
};
