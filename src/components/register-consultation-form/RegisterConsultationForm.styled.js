import { Field, Form, ErrorMessage as ErrorFormik } from "formik";
import styled from "styled-components";

export const RegisterConsultationWrapper = styled.div`
  padding: 64px 14px;

  max-width: 600px;
  max-height: 859px;

  @media screen and (min-width: 768px) {
    padding: 64px;
  }
`;

export const ConsultationFormHeader = styled.h2`
  font-weight: 500;
  font-size: 32px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text.subHeadings};

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

export const ConsultationFormDesc = styled.p`
  margin-top: 20px;

  font-size: 16px;
  line-height: 125%;
  color: ${({ theme }) => theme.colors.text.description};

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const PsychologistDataWrapper = styled.div`
  display: flex;

  margin-top: 40px;
`;

export const PsychologistNameWrapper = styled.div`
  margin-left: 14px;
`;

export const PsychologistNameLabel = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 133%;
  color: ${({ theme }) => theme.colors.text.subInfoText};
`;

export const PsychologistName = styled.h3`
  margin-top: 4px;

  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.text.subHeadings};
`;

export const ConsultationForm = styled(Form)`
  margin-top: 40px;
`;

export const ConsultationFormInput = styled(Field)`
  margin-bottom: 16px;

  padding: 16px 18px;

  width: 100%;

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

  &:focus-visible,
  &:hover {
    border-color: ${({ theme }) => theme.colors.border.input};
  }
`;

export const ConsultationCommentField = styled(Field)`
  resize: none;

  margin-bottom: 40px;

  padding: 16px 18px;

  width: 100%;
  height: 116px;

  outline: none;

  background-color: inherit;

  border: 1px solid rgba(25, 26, 21, 0.1);
  border-radius: 12px;

  &::placeholder {
    font-size: 16px;
    line-height: 125%;
    color: ${({ theme }) => theme.colors.text.inputText};
  }

  &:focus-visible,
  &:hover {
    border-color: ${({ theme }) => theme.colors.border.input};
  }
`;

export const NumberAndTimeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;

  margin-bottom: 16px;

  & > div {
    margin: 0;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    & > div {
      width: calc((100% - 8px) / 2);
    }
  }
`;

export const ErrorMessage = styled(ErrorFormik)`
  position: absolute;
  top: 0;
  left: 0;

  color: red;

  font-size: 12px;

  transform: translateY(-100%);
`;
