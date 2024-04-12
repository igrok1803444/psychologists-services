import { FaQuestion } from "react-icons/fa";
import styled from "styled-components";

export const QuestionLabelStyled = styled.div`
  position: absolute;
  top: 185px;
  left: -30px;

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 48px;
  min-height: 48px;
  max-width: 48px;
  max-height: 48px;

  border-radius: 12px;

  background-color: ${({ theme }) => theme.colors.background.questionLabel};

  color: ${({ theme }) => theme.colors.icons.questionIcon};

  transform: rotate(-15deg);
`;

export const QuestionIcon = styled(FaQuestion)`
  transform: rotate(15deg);
`;
