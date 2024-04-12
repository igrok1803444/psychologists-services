import { ButtonStyled } from "./Button.styled";

export const Button = ({ children, onClick, className, type }) => {
  return (
    <ButtonStyled onClick={onClick} type={type} className={className}>
      {children}
    </ButtonStyled>
  );
};
