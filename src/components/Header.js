import React from "react";
import {Grid, Text, Button} from "../elements";
import {getCookie, deleteCookie} from "../shared/Cookie";

const Header = (props) => {
  const [is_login, setIsLogIn] = React.useState(false);

  React.useEffect(() => {
    let cookie = getCookie("user_id");
    console.log(cookie);

    if (cookie) {
      setIsLogIn(true)
    } else {
      setIsLogIn(false)
    }
  })

  if (is_login){
    return (
      <React.Fragment>
        <Grid is_flex padding="4px 16px"> 
          <Grid>
            <Text size="24px" margin="0" bold>Hello!</Text>
          </Grid>
          <Grid is_flex>
            <Button text="My Information" background="#C4C4C4" color="black"></Button>
            <Button text="Notice" background="#C4C4C4" color="black"></Button>
            <Button text="Log Out" background="#C4C4C4" color="black" _onClick={() => {deleteCookie("user_id");}}></Button>
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