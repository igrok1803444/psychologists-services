import { Suspense } from "react";
import { useSelector } from "react-redux";

import { Outlet } from "react-router-dom";
import { NavLink as ReactRouteLink } from "react-router-dom";
import {
  HeaderLogo,
  HeaderSection,
  HeaderWrapper,
  Nav,
  NavLink,
} from "./Header.styled";
import { ActionText } from "styles/ActionText";

import { UnloginMenu } from "../unlogin-menu/UnloginMenu";
import { selectIsLoggedIn } from "redux/auth/selectors";
import { LoggedInMenu } from "components/logged-in-menu/LoggedInMenu";

export const Header = () => {
  const isLOggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <HeaderSection>
        <div className="container">
          <HeaderWrapper>
            <HeaderLogo as={ReactRouteLink} to="/">
              <ActionText>psychologists.</ActionText>service
            </HeaderLogo>
            <Nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/psychologists">Psychologists</NavLink>
              {isLOggedIn && <NavLink to="/favorite">Favorite</NavLink>}
            </Nav>
            {!isLOggedIn ? <UnloginMenu /> : <LoggedInMenu />}
          </HeaderWrapper>
        </div>
      </HeaderSection>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
