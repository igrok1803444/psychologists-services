import styled from "styled-components";

export const ButtonStyled = styled.button`
  cursor: pointer;

  display: block;

  padding: 14px 40px;

  height: max-content;

  text-align: center;

  width: 100%;

  background-color: ${({ theme }) => theme.colors.background.button};

  border: 1px solid rgba(25, 26, 21, 0.2);
  border-radius: 30px;

  color: ${({ theme }) => theme.colors.text.button};

  transition-property: background-color, color;
  transition-duration: ${({ theme }) => theme.transition.duration};
  transition-timing-function: ${({ theme }) => theme.transition.timingFunction};

  &.action {
    background-color: ${({ theme }) => theme.colors.background.buttonAction};

    color: ${({ theme }) => theme.colors.text.buttonAction};
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.background.buttonHover};

    color: ${({ theme }) => theme.colors.text.buttonAction};
  }
`;
