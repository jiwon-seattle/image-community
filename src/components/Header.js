import React from "react";
import {Grid, Text, Button} from "../elements"

const Header = (props) => {
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