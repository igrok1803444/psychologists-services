import { useDispatch, useSelector } from "react-redux";
import {
  LogOutButtonText,
  LoggedInMenuWrapper,
  UserIconBG,
  UserName,
} from "./LoggedInMenu.styled";
import { selectUser } from "redux/auth/selectors";
import { Button } from "components/button/Button";
import { Notify } from "notiflix";
import { signOut } from "firebase/auth";
import { auth } from "firabase";
import { resetUser } from "redux/auth/authSlice";

export const LoggedInMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleLogOut = (event) => {
    try {
      signOut(auth);
      dispatch(resetUser());
    } catch (error) {
      Notify.failure("Sorry, something went wrong");
    }
  };
  return (
    <LoggedInMenuWrapper>
      <UserIconBG>
        <img src="./images/user-icon.svg" alt="user-icon" />
      </UserIconBG>
      <UserName>{user.name}</UserName>
      <Button type={"button"} onClick={handleLogOut}>
        <LogOutButtonText>Log out</LogOutButtonText>
      </Button>
    </LoggedInMenuWrapper>
  );
};
