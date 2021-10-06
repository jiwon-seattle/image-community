import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {text, _onClick, background, color} = props;
  return (
    <React.Fragment>
        <ElButton onClick={_onClick} background={background} color={color}>{text}</ElButton>
    </React.Fragment>
  )
}

Button.defaultProps = {
  text: "Text",
  background: "#212121",
  color: "#ffffff",
  _onClick: () => {}
}

const ElButton = styled.button`
  width: 100%;
  ${(props) => (props.background? `background: ${props.background};` : '')};
  ${(props) => (props.color? `color: ${props.color};` : '')};
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
`

export default Button;