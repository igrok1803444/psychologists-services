import styled from "styled-components";

export const LoggedInMenuWrapper = styled.div`
  display: flex;
`;

export const UserIconBG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background.userIcon};
`;
