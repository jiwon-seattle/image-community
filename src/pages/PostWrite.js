import React from "react";

import { Grid, Text, Button, Image, Input } from "../elements";
import Upload from "../shared/Upload";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const PostWrite = (props) => {
  const dispatch = useDispatch();

  const is_login = useSelector((state) => state.user.is_login);
  const preview = useSelector((state) => state.image.preview);

  const { history } = props;

  const [contents, setContents] = React.useState("");

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const addPost = () => {
    dispatch(postActions.addPostFB(contents));
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
        <Image
          shape="rectangle"
          src={preview ? preview : "https://via.placeholder.com/400x300"}
        />
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
        <Button
          _onClick={() => {
            addPost();
          }}
        >
          Publish
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
