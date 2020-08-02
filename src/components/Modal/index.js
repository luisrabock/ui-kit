import React from "react";
import propTypes from "prop-types";

import * as S from "./styled";

export const Modal = ({ open, setOpen, title, children, ...props }) => {
  return (
    <S.FullScreen open={open}>
      <S.Container {...props} title={title}>
        <S.Close onClick={() => setOpen(false)}>X</S.Close>

        <h2>{title}</h2>

        {children}
      </S.Container>
    </S.FullScreen>
  );
};

Modal.propTypes = {
  open: propTypes.bool.isRequired,
  setOpen: propTypes.func.isRequired,
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};
