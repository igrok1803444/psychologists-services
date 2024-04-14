import { IoMdStar } from "react-icons/io";
import styled from "styled-components";

export const RatingContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
`;

export const RatingIcon = styled(IoMdStar)`
  width: 20px;
  height: 20px;

  fill: ${({ theme }) => theme.colors.icons.rating};
`;

export const RatingText = styled.p`
  margin-left: 8px;

  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.text.rating};
`;
