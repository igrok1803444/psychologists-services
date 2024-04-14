import styled from "styled-components";

export const ConditionsListStyled = styled.ul`
  display: flex;
  column-gap: 4px;
  row-gap: 8px;
  flex-wrap: wrap;

  margin-top: 24px;
`;

export const ConditionsLI = styled.li`
  padding: 8px 16px;

  font-weight: 500;
  font-size: 16px;
  line-height: 150%;

  border-radius: 24px;

  color: ${({ theme }) => theme.colors.text.subInfoText};
  background-color: ${({ theme }) => theme.colors.background.conditionsLI};

  & span {
    color: ${({ theme }) => theme.colors.text.conditionText};
  }
`;
