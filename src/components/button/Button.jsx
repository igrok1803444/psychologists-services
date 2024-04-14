import { ButtonStyled } from "./Button.styled";

export const Button = ({ children, onClick, className, style, type }) => {
  return (
    <ButtonStyled
      onClick={onClick}
      type={type}
      style={style}
      className={className}
    >
      {children}
    </ButtonStyled>
  );
};
