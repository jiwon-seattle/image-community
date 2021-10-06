import React from "react";
import styled from "styled-components";
import {Text, Grid} from '../elements'

const Input = (props) => {
  const {label, placeholder, _onChange} = props;
  return (
    <React.Fragment>
      <Grid>
        <Text margin="0px">{label}</Text>
        <ElInput placeholder={placeholder} onChange={_onChange}/>
      </Grid>
    </React.Fragment>
  )
}

Input.defaultProps = {
  label: 'Text',
  placeholder: 'Please type',
  _onChange: () => {}
}

const ElInput = styled.input`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-size: border-box;
`
export default Input;