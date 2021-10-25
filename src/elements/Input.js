import React from "react";
import styled from "styled-components";
import { Text, Grid } from "../elements";

const Input = (props) => {
  const { label, placeholder, _onChange, type, multiline } = props;

  if (multiline) {
    return (
      <Grid>
        <Text margin="0px">{label}</Text>
        <ElTextarea rows={10} placeholder={placeholder} onChange={_onChange} />
      </Grid>
    );
  }
  return (
    <React.Fragment>
      <Grid>
        <Text margin="0px">{label}</Text>
        <ElInput type={type} placeholder={placeholder} onChange={_onChange} />
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  multiline: false,
  label: "Text",
  placeholder: "Please type",
  type: "text",
  _onChange: () => {},
};

const ElTextarea = styled.textarea`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-size: border-box;
`;
const ElInput = styled.input`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-size: border-box;
`;
export default Input;
