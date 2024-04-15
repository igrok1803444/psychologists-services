import { Suspense } from "react";
import { useSelector } from "react-redux";

import { Outlet } from "react-router-dom";
import { NavLink as ReactRouteLink } from "react-router-dom";
import {
  BurgerMenu,
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

import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useEffect } from "react";

export const Header = ({ modalStyles }) => {
  const isLOggedIn = useSelector(selectIsLoggedIn);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", (event) => {
      setWindowWidth(event.currentTarget.innerWidth);
    });
  }, []);

  return (
    <>
      <HeaderSection>
        <div className="container" style={{ position: "relative" }}>
          <HeaderWrapper>
            <HeaderLogo as={ReactRouteLink} to="/">
              <ActionText>psychologists.</ActionText>service
            </HeaderLogo>
            {windowWidth > 1024 && (
              <>
                <Nav>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/psychologists">Psychologists</NavLink>
                  {isLOggedIn && <NavLink to="/favorite">Favorite</NavLink>}
                </Nav>
                {!isLOggedIn ? (
                  <UnloginMenu modalStyles={modalStyles} />
                ) : (
                  <LoggedInMenu />
                )}{" "}
              </>
            )}
            {windowWidth <= 1024 && (
              <>
                <BurgerMenu
                  onClick={() => {
                    setMenuIsOpen(true);
                  }}
                >
                  <FiMenu />
                </BurgerMenu>
              </>
            )}
          </HeaderWrapper>
          <Menu
            right
            isOpen={menuIsOpen}
            onClose={() => {
              setMenuIsOpen(false);
            }}
            customBurgerIcon={false}
          >
            {!isLOggedIn ? (
              <UnloginMenu modalStyles={modalStyles} />
            ) : (
              <LoggedInMenu />
            )}
            <Nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/psychologists">Psychologists</NavLink>
              {isLOggedIn && <NavLink to="/favorite">Favorite</NavLink>}
            </Nav>
          </Menu>
        </div>
      </HeaderSection>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
