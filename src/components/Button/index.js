import React from "react";

import { Container } from "./styled";

const ButtonWrapper = ({
  children,
  backgroundColor = "#7159c1",
  color = "#fff",
  outlined = false,
  ...props
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
      outlined={outlined}
      {...props}
    >
      {children}
    </Container>
  );
};

export { ButtonWrapper as Button };
