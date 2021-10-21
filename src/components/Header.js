import React from "react";
import {Grid, Text, Button} from "../elements";
import {getCookie, deleteCookie} from "../shared/Cookie";

import {useSelector, useDispatch} from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_logIn = useSelector((state) => state.user.is_login);

  if (is_logIn){
    return (
      <React.Fragment>
        <Grid is_flex padding="4px 16px"> 
          <Grid>
            <Text size="24px" margin="0" bold>Hello!</Text>
          </Grid>
          <Grid is_flex>
            <Button text="My Information" background="#C4C4C4" color="black"></Button>
            <Button text="Notice" background="#C4C4C4" color="black"></Button>
            <Button text="Log Out" background="#C4C4C4" color="black" _onClick={() => {dispatch(userActions.logOut({}))}}></Button>
          </Grid>
        </Grid>
      </React.Fragment>
      )
  }
  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px"> 
        <Grid>
          <Text size="24px" margin="0" bold>Hello!</Text>
        </Grid>
        <Grid is_flex>
          <Button text="LogIn" background="#C4C4C4" color="black"></Button>
          <Button text="Join" background="#C4C4C4" color="black"></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
} 

Header.defaultProps = {}

export default Header;