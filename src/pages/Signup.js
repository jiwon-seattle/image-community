  import React from "react";
  import {Grid, Text, Input, Button} from '../elements';

  const SignUp = (props) => {
    return (
      <React.Fragment>
        <Grid padding="16px">
          <Text size="32px" bold>Join</Text>
          <Grid padding="16px 0px">
            <Input label="ID" placeholder="Put ID" _onChange={() => {console.log('!!')}}/>
          </Grid>
          <Grid padding="16px 0px">
            <Input label="Nick Name" placeholder="Put Nick name" _onChange={() => {console.log('!!')}}/>
          </Grid>
          <Grid padding="16px 0px">
            <Input label="Password" placeholder="Put Password" _onChange={() => {console.log('!!')}}/>
          </Grid>
          <Grid padding="16px 0px">
            <Input label="Re-enter Password" placeholder="Put Password again" _onChange={() => {console.log('!!')}}/>
          </Grid>
          <Button text="Join"></Button>
        </Grid>
      </React.Fragment>
    )
  }

  SignUp.defaultProps = {}

  export default SignUp;