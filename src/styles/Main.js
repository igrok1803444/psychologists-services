import styled from "styled-components";

export const Main = styled.main`
  min-width: 100%;
  min-height: 100vh;

  background-color: rgba(255, 255, 255, 0.5);
  background: ${({ theme }) => theme.gradients.heroGradient};
`;
