import styled from "styled-components";

export const SpecialistCounWrapper = styled.div`
  position: absolute;
  bottom: 75px;
  left: -101px;

  display: flex;
  column-gap: 16px;
  align-items: center;

  padding: 32px;

  width: 311px;
  height: 118px;

  border-radius: 20px;

  background-color: ${({ theme }) => theme.colors.background.specialistLabel};
`;

export const SpecialistIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 54px;
  min-height: 54px;
  max-width: 54px;
  max-height: 54px;

  border-radius: 13px;

  background-color: ${({ theme }) =>
    theme.colors.background.specialistIconContainer};

  color: ${({ theme }) => theme.colors.icons.specialistIcon};
`;

export const SpecialistDesc = styled.p`
  margin-bottom: 8px;

  font-size: 14px;
  color: rgba(251, 251, 251, 0.5);
`;

export const SpecialistCounter = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text.subColorText};
`;
