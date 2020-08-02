import React from "react";
import propTypes from "prop-types";

import * as S from "./styled";

const changeSizeButton = (size) => {
  if (size === "small") return "10px";
  if (size === "medium") return "12px";
  if (size === "large") return "16px";
  if (size === "extra-large") return "20px";
  return "10px";
};

const ButtonWrapper = ({
  children,
  backgroundColor = "#7159c1",
  color = "#fff",
  outlined = false,
  size = "10px",
  ...props
}) => {
  return (
    <S.Container
      backgroundColor={backgroundColor}
      color={color}
      outlined={outlined}
      {...props}
      size={changeSizeButton(size)}
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
  size: propTypes.string.isRequired,
};

export { ButtonWrapper as Button };
