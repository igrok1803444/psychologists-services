import ReactModal from "react-modal";

import { Button } from "../button/Button";
import { AuthButtonText, UnLoginMenu } from "./UnloginMenu.styled";

import { useState } from "react";

import { AuthForm } from "components/auth-form/AuthForm";

export const UnloginMenu = ({ modalStyles }) => {
  const [openForm, setOpenForm] = useState("");
  const [openAuthModal, setOpenAuthModal] = useState(false);

  const handleModalClose = (event) => {
    event.preventDefault();
    setOpenAuthModal(false);
  };

  const handleOpenForm = (option) => {
    setOpenForm(option);
    setOpenAuthModal(true);
  };
  return (
    <>
      <UnLoginMenu>
        <Button
          type="button"
          onClick={() => {
            handleOpenForm("login");
          }}
        >
          <AuthButtonText>Log In</AuthButtonText>
        </Button>
        <Button
          type="button"
          className={"action"}
          onClick={() => {
            handleOpenForm("register");
          }}
        >
          <AuthButtonText>Registration</AuthButtonText>
        </Button>
      </UnLoginMenu>

      <ReactModal
        isOpen={openAuthModal}
        onRequestClose={handleModalClose}
        style={modalStyles}
        appElement={document.body}
      >
        <AuthForm option={openForm} handleModalClose={handleModalClose} />
      </ReactModal>
    </>
  );
};
