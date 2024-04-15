import { Field, Form, ErrorMessage as ErrorFormik } from "formik";
import { styled } from "styled-components";

export const AuthFormWrapper = styled.div`
  overflow-y: scroll;

  padding: 64px;

  width: 100%;
  height: 100%;

  max-width: 565px;
  max-height: 580px;
`;

export const AuthFormHeading = styled.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text.subHeadings};
`;

export const AuthFormDesc = styled.p`
  margin-top: 20px;

  font-size: 16px;
  line-height: 125%;
  color: ${({ theme }) => theme.colors.text.description};
`;

export const AuthFormStyled = styled(Form)`
  margin-top: 40px;
`;
export const AuthFormInput = styled(Field)`
  width: 100%;

  margin-bottom: 18px;

  padding: 16px 18px;

  border: 1px solid rgba(25, 26, 21, 0.1);
  border-radius: 12px;

  font-size: 16px;
  line-height: 125%;
  color: ${({ theme }) => theme.colors.text.inputText};

  &::placeholder {
    font-size: 16px;
    line-height: 125%;
    color: ${({ theme }) => theme.colors.text.inputText};
  }

  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.border.input};
  }
`;

export const PasswordInputWrapper = styled.div`
  position: relative;

  margin-bottom: 40px;

  & > input {
    margin: 0;
  }
`;

export const AuthSubmitButtonText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.text.buttonAction};
`;

export const ErrorMessage = styled(ErrorFormik)`
  color: red;

  font-size: 12px;
`;

export const ChangePasswordVisibilityButton = styled.button`
  cursor: pointer;

  position: absolute;
  bottom: 16px;
  right: 16px;

  width: fit-content;
  height: fit-content;

  background: none;
  border: none;

  :hover,
  :focus {
    background: none;
    border: none;
  }
`;
