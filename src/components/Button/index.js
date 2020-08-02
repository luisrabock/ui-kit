import React from "react";
import propTypes from "prop-types";

import * as S from "./styled";

const ButtonWrapper = ({
  children,
  backgroundColor = "#7159c1",
  color = "#fff",
  outlined = false,
  ...props
}) => {
  return (
    <S.Container
      backgroundColor={backgroundColor}
      color={color}
      outlined={outlined}
      {...props}
    >
      {children}
    </S.Container>
  );
};

ButtonWrapper.propTypes = {
  children: propTypes.node.isRequired,
  backgroundColor: propTypes.string.isRequired,
  color: propTypes.string.isRequired,
  outlined: propTypes.bool.isRequired,
};

export { ButtonWrapper as Button };
