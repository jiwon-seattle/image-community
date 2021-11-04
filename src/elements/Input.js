import React from "react";
import styled from "styled-components";
import { Text, Grid } from "../elements";

const Input = (props) => {
  const {
    label,
    placeholder,
    _onChange,
    type,
    multiline,
    value,
    is_submit,
    onSubmit,
  } = props;

  if (multiline) {
    return (
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElTextarea
          rows={10}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
        />
      </Grid>
    );
  }
  return (
    <React.Fragment>
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        {is_submit ? (
          <ElInput
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
            value={value}
            onKeyPress={(e) => {
              if (e.key == "Enter") {
                onSubmit(e);
              }
            }}
          />
        ) : (
          <ElInput type={type} placeholder={placeholder} onChange={_onChange} />
        )}
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  multiline: false,
  label: false,
  placeholder: "Please type",
  type: "text",
  value: "",
  is_submit: false,
  onSdubmit: () => {},
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
