import styled from "styled-components";
import { NavLink as ReactRouteLink } from "react-router-dom";

export const HeaderSection = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  margin: 0 auto;

  padding: 24px 0;

  width: 100%;

  background-color: ${({ theme }) => theme.colors.background.headerSection};

  border-bottom: 1px solid rgba(25, 26, 21, 0.1);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 auto;

  max-width: 1184px;
`;

export const HeaderLogo = styled.h1`
  display: block;

  padding: 10px 0;

  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text.logoText};
`;

export const Nav = styled.nav`
  display: flex;

  column-gap: 40px;

  text-align: center;
`;

export const NavLink = styled(ReactRouteLink)`
  display: block;
  position: relative;

  padding: 14px 0;

  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;

  color: ${({ theme }) => theme.colors.text.navLink};

  transition-property: background-color, color;
  transition-duration: ${({ theme }) => theme.transition.duration};
  transition-timing-function: ${({ theme }) => theme.transition.timingFunction};

  &.active::after {
    content: "";

    position: absolute;
    bottom: 4px;
    left: 50%;

    width: 8px;
    height: 8px;

    border-radius: 100%;

    background-color: ${({ theme }) =>
      theme.colors.background.navLinkActivePointer};

    transform: translateX(-50%);
  }
`;
