import { LoggedInMenuWrapper, UserIconBG } from "./LoggedInMenu.styled";

export const LoggedInMenu = () => {
  return (
    <LoggedInMenuWrapper>
      <UserIconBG>
        <img src="./images/user-icon.svg" alt="user-icon" />
      </UserIconBG>
    </LoggedInMenuWrapper>
  );
};
