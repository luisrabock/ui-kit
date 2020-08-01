import React from "react";

import { FullScreen, Container, Close } from "./styled";

export const Modal = ({ open, setOpen, title, children, ...props }) => {
  return (
    <FullScreen open={open}>
      <Container {...props} title={title}>
        <Close onClick={() => setOpen(false)}>X</Close>

        <h2>{title}</h2>

        {children}
      </Container>
    </FullScreen>
  );
};
