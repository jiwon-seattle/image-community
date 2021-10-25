import React from "react";
import { Grid, Text, Input, Button } from "../elements";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/common";

const SignUp = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");
  const [user_name, setUsername] = React.useState("");

  const singup = () => {
    if (id === "" || pwd === "" || user_name === "") {
      window.alert("Please fitt Id or Password");
      return;
    }
    if (!emailCheck(id)) {
      window.alert("Email is not allowed");
      return;
    }
    if (pwd !== pwd_check) {
      window.alert("Passwords are not equal");
      return;
    }

    dispatch(userActions.signUpFB(id, pwd, user_name));
  };
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          Join
        </Text>
        <Grid padding="16px 0px">
          <Input
            label="ID"
            placeholder="Put ID"
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="Nick Name"
            placeholder="Put Nick name"
            _onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="Password"
            placeholder="Put Password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="Re-enter Password"
            placeholder="Put Password again"
            _onChange={(e) => {
              setPwdCheck(e.target.value);
            }}
          />
        </Grid>
        <Button text="Join" _onClick={singup}></Button>
      </Grid>
    </React.Fragment>
  );
};

SignUp.defaultProps = {};

export default SignUp;
