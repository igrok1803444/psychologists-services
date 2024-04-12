import { FaCheck } from "react-icons/fa";
import {
  SpecialistCounWrapper,
  SpecialistCounter,
  SpecialistDesc,
  SpecialistIconContainer,
} from "./SpecialistCount.styled";

export const SpecialistCount = () => {
  return (
    <SpecialistCounWrapper>
      <SpecialistIconContainer>
        <FaCheck />
      </SpecialistIconContainer>
      <div>
        <SpecialistDesc>Experienced psychologists</SpecialistDesc>
        <SpecialistCounter>15,000</SpecialistCounter>
      </div>
    </SpecialistCounWrapper>
  );
};
