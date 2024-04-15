import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "redux/modal/modalSlice";
import { selectModalData } from "redux/modal/selectors";
import {
  ConsultationCommentField,
  ConsultationForm,
  ConsultationFormDesc,
  ConsultationFormHeader,
  ConsultationFormInput,
  ErrorMessage,
  NumberAndTimeWrapper,
  PsychologistDataWrapper,
  PsychologistName,
  PsychologistNameLabel,
  PsychologistNameWrapper,
  RegisterConsultationWrapper,
} from "./RegisterConsultationForm.styled";

import { ModalCloseIcon } from "styles/ModalInfo.styled";
import { Img } from "styles/Img";

import { Button } from "components/button/Button";
import { Formik } from "formik";
import * as yup from "yup";

import { DesktopTimePicker } from "@mui/x-date-pickers";

import { useState } from "react";
import { theme } from "styles/themes";

const schema = yup.object().shape({
  userName: yup.string().required("Required"),
  userEmail: yup.string().email("Invalid email").required("Required"),
  userPhone: yup
    .string()
    .matches(/^\+?3?8?(0\d{9})$/i, {
      message: "Phone must be start at +380 and had 9 digites after",
    })
    .required("Required"),
  consultationTime: yup.string().required("Required"),
  userComment: yup.string().required("Required"),
});

export const RegisterConsultationForm = () => {
  const dispatch = useDispatch();
  const modalData = useSelector(selectModalData);

  const [time, setTime] = useState("");

  const initalValues = {
    userName: "",
    userEmail: "",
    userPhone: "",
    consultationTime: time,
    userComment: "",
  };

  const { avatar_url, name } = modalData;

  const handleModalClose = (event) => {
    event.preventDefault();
    dispatch(closeModal());
  };
  return (
    <RegisterConsultationWrapper>
      <ModalCloseIcon onClick={handleModalClose} />
      <ConsultationFormHeader>
        Make an appointment with a psychologists
      </ConsultationFormHeader>
      <ConsultationFormDesc>
        You are on the verge of changing your life for the better. Fill out the
        short form below to book your personal appointment with a professional
        psychologist. We guarantee confidentiality and respect for your privacy.
      </ConsultationFormDesc>
      <PsychologistDataWrapper>
        <Img src={avatar_url} alt={name} width={44} height={44} />
        <PsychologistNameWrapper>
          <PsychologistNameLabel>Your psychologists</PsychologistNameLabel>
          <PsychologistName>{name}</PsychologistName>
        </PsychologistNameWrapper>
      </PsychologistDataWrapper>
      <Formik validationSchema={schema} initialValues={initalValues}>
        <ConsultationForm>
          <div style={{ position: "relative" }}>
            <ErrorMessage component="p" name="userName" />
            <ConsultationFormInput
              id="userName"
              name="userName"
              placeholder="Name"
              type="text"
            />
          </div>

          <NumberAndTimeWrapper>
            <div style={{ position: "relative" }}>
              <ErrorMessage component="p" name="userPhone" />
              <ConsultationFormInput
                placeholder="+380"
                id="userPhone"
                name="userPhone"
              />
            </div>
            <div style={{ position: "relative" }}>
              <ErrorMessage component="p" name="consultationTime" />

              <DesktopTimePicker
                onChange={(e) => {
                  console.log(e.$H);
                  setTime(`${e.$H}:${e.$M}`);
                }}
                name="consultationTime"
                ampm={false}
                disablePast={true}
                slotProps={{
                  popper: {
                    sx: {
                      overflow: "hidden",
                      ".MuiMenuItem-root": {
                        color: "rgba(25, 26, 21, 0.3)",

                        backgroundColor: "none",
                      },
                      ".MuiMenuItem-gutters.Mui-selected.MuiMenuItem-root.MuiMultiSectionDigitalClockSection-item:hover":
                        {
                          color: "#191a15",

                          backgroundColor: "inherit",
                        },
                      ".MuiMenuItem-root.Mui-selected": {
                        color: "#191a15",
                      },
                    },
                  },
                  desktopPaper: {
                    sx: {
                      backgroundColor: "#fbfbfb",
                      borderRadius: "12px",
                      boxShadow: "0 20px 69px 0 rgba(0, 0, 0, 0.07)",

                      alignItems: "center",
                    },
                  },
                  actionBar: {
                    sx: {
                      display: "none",
                    },
                  },
                }}
                sx={{
                  borderRadius: "12px",
                  outline: "none",
                  ".MuiOutlinedInput-notchedOutline": {
                    borderRadius: "12px",
                  },
                  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: theme.colors.border.input,
                    },
                  ".MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: theme.colors.border.input,
                    },
                }}
              />
            </div>
          </NumberAndTimeWrapper>
          <div style={{ position: "relative" }}>
            <ErrorMessage component="p" name="userEmail" />
            <ConsultationFormInput
              placeholder="Email"
              id="userEmail"
              name="userEmail"
            />
          </div>
          <div style={{ position: "relative" }}>
            <ErrorMessage component="p" name="userComment" />
            <ConsultationCommentField
              component="textarea"
              id="userComment"
              name="userComment"
              placeholder="Comment"
            />
          </div>
          <Button type="submit" className="action" style={{ width: "100%" }}>
            Send
          </Button>
        </ConsultationForm>
      </Formik>
    </RegisterConsultationWrapper>
  );
};
