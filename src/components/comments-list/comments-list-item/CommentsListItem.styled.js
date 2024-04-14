import styled from "styled-components";

export const CommenttionLI = styled.li`
  margin-bottom: 24px;
`;

export const ComentatorDataWrapper = styled.div`
  display: flex;
`;
export const ComentatorProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 44px;
  height: 44px;

  background-color: ${({ theme }) => theme.colors.background.comentatorPhoto};

  border-radius: 100%;
`;

export const ComentatorFirstLetter = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.text.comentatorFirstLetter};
`;

export const CommentatorNameWrapper = styled.div`
  margin-left: 12px;
`;

export const CommentatorName = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: ${({ theme }) => theme.colors.text.subHeadings};
`;

export const RatingRext = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: ${({ theme }) => theme.colors.text.infoText};
`;

export const CommentText = styled.p`
  margin-top: 16px;

  font-size: 16px;
  line-height: 125%;
  color: ${({ theme }) => theme.colors.text.description};
`;
