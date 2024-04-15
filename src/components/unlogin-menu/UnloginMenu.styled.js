import styled from "styled-components";

export const UnLoginMenu = styled.div`
  display: flex;

  column-gap: 8px;
   @media screen and (max-width: 1023px) {
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 18px;
  }
`;

export const AuthButtonText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
`;
