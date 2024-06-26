import styled from "styled-components";

export const LoggedInMenuWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1023px) {
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 18px;
  }
`;

export const UserIconBG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 40px;
  max-width: 40px;
  height: 40px;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.background.userIcon};
`;

export const UserName = styled.h2`
  margin-left: 14px;
  margin-right: 28px;

  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.text.subHeadings};
`;

export const LogOutButtonText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
`;
