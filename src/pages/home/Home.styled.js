import styled from "styled-components";
import { NavLink as ReactRouteLink } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

export const HomeContainer = styled.main`
  min-width: 100vh;
  min-height: 100vh;

  background-color: rgba(255, 255, 255, 0.5);
  background: ${({ theme }) => theme.gradients.heroGradient};
`;

export const HeroWrapper = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  column-gap: 125px;

  padding: 60px;
  padding-top: 78px;
  @media (min-width: 768px) {
    padding: 128px;
  }
`;
export const MainTitleWrapper = styled.div`
  max-width: 595px;

  padding-top: 48px;
  padding-bottom: 40px;
`;

export const MainTitle = styled.h1`
  font-weight: 600;
  font-size: 80px;
  line-height: 102%;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text.mainTitle};
`;

export const HeroText = styled.p`
  margin-top: 20px;

  max-width: 490px;

  font-weight: 500;
  font-size: 18px;
  line-height: 133%;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text.infoText};
`;

export const NavLinkHeroText = styled.p`
  margin-right: 18px;

  text-align: center;

  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.text.navLinkActive};
`;

export const NavLink = styled(ReactRouteLink)`
  display: flex;
  align-items: baseline;
  justify-content: center;

  margin-top: 40px;

  padding: 18px;

  width: 100%;
  max-width: 235px;

  background-color: ${({ theme }) => theme.colors.background.navLink};

  border-radius: 30px;

  color: ${({ theme }) => theme.colors.text.navLinkActive};

  transition-property: background-color;
  transition-duration: ${({ theme }) => theme.transition.duration};
  transition-timing-function: ${({ theme }) => theme.transition.timingFunction};

  &.active {
    background-color: ${({ theme }) => theme.colors.background.buttonHover};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.background.buttonHover};
  }
`;

export const ArrowIcon = styled(FaArrowUp)`
  transform: rotateZ(45deg);
`;

export const ImageWrapper = styled.div`
  position: relative;

  width: 100%;
  min-height: 100%;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const HeroImg = styled.img`
  border-radius: 10px;
  overflow: hidden;
`;
