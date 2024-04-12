import { ModalCloseIcon } from "components/modal/modal-info/ModalInfo.styled";
import * as yup from "yup";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Notify } from "notiflix";

import {
  AuthFormDesc,
  AuthFormHeading,
  AuthFormWrapper,
  AuthFormStyled,
  AuthFormInput,
  PasswordInputWrapper,
  AuthSubmitButtonText,
  ErrorMessage,
} from "./AuthForm.styled";
import { Button } from "components/button/Button";
import { Formik } from "formik";

import { loginFunc, registerfunc } from "features";
import { useDispatch } from "react-redux";
import { setUser } from "redux/auth/authSlice";

const registeSchema = yup.object().shape({
  userName: yup.string().required("Required"),
  userEmail: yup.string().email("Invalid email").required("Required"),
  userPassword: yup.string().min(6).required("Required"),
});

const loginSchema = yup.object().shape({
  userEmail: yup.string().email("Invalid email").required("Required"),
  userPassword: yup.string().min(6).required("Required"),
});
const loginnDesc =
  "Welcome back! Please enter your credentials to access your account and continue your search for a psychologist.";
const registrationDesc =
  "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.";
const initialLoginValues = {
  userEmail: "",
  userPassword: "",
};
const initiaRegisterValues = {
  userName: "",
  userEmail: "",
  userPassword: "",
};
export const AuthForm = ({ option, handleModalClose }) => {
  const dispatch = useDispatch();

  let initialValues = {};
  let schema = {};

  const handleSubmit = async (values, { resetForm }) => {
    try {
      let user;
      if (option === "login") {
        user = await loginFunc(values.userEmail, values.userPassword);
        console.log(user);
      }

      if (option === "register") {
        user = await registerfunc(
          values.userEmail,
          values.userName,
          values.userPassword
        );
        console.log(user);
      }
      const { displayName, accessToken, email } = user;
      dispatch(setUser({ displayName, accessToken, email }));
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        Notify.failure("Bad password or email");
      }
      if (error.code === "auth/invalid-email") {
        Notify.failure("Email adress is wrong");
      }
    }
  };

  if (option === "login") {
    initialValues = initialLoginValues;
    schema = loginSchema;
  }
  if (option === "register") {
    initialValues = initiaRegisterValues;
    schema = registeSchema;
  }

  return (
    <>
      <ModalCloseIcon onClick={handleModalClose} />

      <AuthFormWrapper style={{ maxHeight: "580px" }}>
        <AuthFormHeading>
          {option === "login" && "Log In"}
          {option === "register" && "Registration"}
        </AuthFormHeading>
        <AuthFormDesc>
          {option === "login" && loginnDesc}
          {option === "register" && registrationDesc}
        </AuthFormDesc>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={schema}
        >
          <AuthFormStyled>
            {option === "register" && (
              <>
                <ErrorMessage component="p" name="userName" />
                <AuthFormInput
                  type="text"
                  placeholder="Name"
                  name="userName"
                  id="userName"
                />
              </>
            )}
            <ErrorMessage component="p" name="userEmail" />

            <AuthFormInput
              type="email"
              placeholder="Email"
              name="userEmail"
              id="userEmail"
            />
            <PasswordInputWrapper>
              <ErrorMessage component="p" name="userPassword" />

              <AuthFormInput
                id="userPassword"
                type="password"
                placeholder="Password"
                name="userPassword"
              />
            </PasswordInputWrapper>

            <Button type="submit" className="action">
              <AuthSubmitButtonText>
                {option === "login" && "Log In"}
                {option === "register" && "Sign Up"}
              </AuthSubmitButtonText>
            </Button>
          </AuthFormStyled>
        </Formik>
      </AuthFormWrapper>
    </>
  );
};
