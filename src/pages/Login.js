import React from "react";
import {Text, Input, Grid, Button} from "../elements"
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

import {useDispatch} from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user";

const Login = (props) => {
  const dispatch = useDispatch();
  const login = () => {
    dispatch(userActions.loginAction({user_name: 'jiwon'}));
  }
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>login </Text>
        <Grid padding="16px 0px">
          <Input label="ID" placeholder="Type ID" _onChange={()=>{console.log('ID has been typed!')}}/>
        </Grid>
        <Grid padding="16px 0px">
          <Input label="Password" placeholder="Type Password" _onChange={()=>{console.log('Password has been typed!')}}/>
        </Grid>
        <Button text="LogIn" _onClick={() => {console.log('logged in!'); login();}}></Button>
      </Grid>
    </React.Fragment>
  )
}

export default Login;