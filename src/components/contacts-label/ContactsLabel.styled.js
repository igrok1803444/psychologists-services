import styled from "styled-components";

export const ContactsLabelStyled = styled.div`
  position: absolute;
  top: 38px;
  left: 460px;

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 48px;
  min-height: 48px;
  max-width: 48px;
  max-height: 48px;

  border-radius: 12px;

  background-color: ${({ theme }) => theme.colors.background.contactsContainer};

  color: ${({ theme }) => theme.colors.icons.contactsIcon};

  transform: rotate(15deg);
`;
