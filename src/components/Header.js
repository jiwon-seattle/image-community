import React from "react";
import { Grid, Text, Button } from "../elements";
import { getCookie, deleteCookie } from "../shared/Cookie";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";
import { apiKey } from "../shared/firebase";

import NotiBadge from "./NotiBadge";

import Permit from "../shared/Permit";

/* eslint-disable */

const Header = (props) => {
  const dispatch = useDispatch();
  const is_logIn = useSelector((state) => state.user.is_login);
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  if (is_logIn && is_session) {
    // }
    // <Permit>
    {
      /* return ( */
    }
    {
      /* console.log('hi') */
    }
    return (
      <React.Fragment>
        <Grid is_flex padding="4px 16px">
          <Grid>
            <Text size="24px" margin="0" bold>
              Hello!
            </Text>
          </Grid>
          <Grid is_flex>
            <Button
              text="My Information"
              background="#C4C4C4"
              color="black"
            ></Button>
            {/* <Button
              _onClick={() => {
                history.push("/noti");
              }}
              text="Notice"
              background="#C4C4C4"
              color="black"
            ></Button> */}
            <NotiBadge
              _onClick={() => {
                history.push("/noti");
              }}
            />
            <Button
              text="Log Out"
              background="#C4C4C4"
              color="black"
              _onClick={() => {
                dispatch(userActions.logoutFB());
              }}
            ></Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
    {
      /* </Permit>; */
    }
  }
  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text size="24px" margin="0" bold>
            Hello!
          </Text>
        </Grid>
        <Grid is_flex>
          <Button
            text="LogIn"
            _onClick={() => {
              history.push("/login");
            }}
            background="#C4C4C4"
            color="black"
          ></Button>
          <Button
            text="Join"
            _onClick={() => {
              history.push("/signup");
            }}
            background="#C4C4C4"
            color="black"
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;
