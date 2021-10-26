import React from "react";

import { Grid, Text, Button, Image, Input } from "../elements";
import Upload from "../shared/Upload";

import { useSelector, useDispatch } from "react-redux";

const PostWrite = (props) => {
  const is_login = useSelector((state) => state.user.is_login);
  const { history } = props;
  const [contents, setContents] = React.useState("");
  const changeContents = (e) => {
    setContents(e.target.value);
  };

  if (!is_login) {
    return (
      <Grid margin="100px 0px" padding="16px" center>
        <Text size="32px" bold>
          Ah! Wait
        </Text>
        <Text size="16px">You can write a post after login</Text>
        <Button
          _onClick={() => {
            history.replace("/");
          }}
        >
          Let's Log In
        </Button>
      </Grid>
    );
  }
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text margin="0px" size="36px" bold>
          Write the post
        </Text>
        <Upload></Upload>
      </Grid>
      <Grid>
        <Grid padding="16px">
          <Text margin="0px" size="24px" bold>
            Preview
          </Text>
        </Grid>
        <Image shape="rectangle" />
      </Grid>
      <Grid padding="16px">
        <Input
          _onChange={changeContents}
          label="Post content"
          placeholder="Fill the content"
          multiline
        ></Input>
      </Grid>
      <Grid padding="16px">
        <Button>Publish</Button>
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
