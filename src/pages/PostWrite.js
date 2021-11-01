import React from "react";

import { Grid, Text, Button, Image, Input } from "../elements";
import Upload from "../shared/Upload";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";

const PostWrite = (props) => {
  const dispatch = useDispatch();

  const is_login = useSelector((state) => state.user.is_login);
  const preview = useSelector((state) => state.image.preview);
  const post_list = useSelector((state) => state.post.list);

  console.log(props.match.params.id);

  const post_id = props.match.params.id;
  const is_edit = post_id ? true : false;

  const { history } = props;

  let _post = is_edit ? post_list.find((p) => p.id === post_id) : null;
  console.log(_post);

  const [contents, setContents] = React.useState(_post ? _post.contents : "");

  React.useEffect(() => {
    if (is_edit && !_post) {
      alert("post information does not exist");
      history.goBack();
      return;
    }

    if (is_edit) {
      dispatch(imageActions.setPreview(_post.image_url));
    }
  }, []);

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const addPost = () => {
    dispatch(postActions.addPostFB(contents));
  };

  const editPost = () => {
    dispatch(postActions.editPostFB(post_id, { contents: contents }));
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
          {is_edit ? "Edit Post" : "Write Post"}
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
          value={contents}
          _onChange={changeContents}
          label="Post content"
          placeholder="Fill the content"
          multiline
        ></Input>
      </Grid>
      <Grid padding="16px">
        {is_edit ? (
          <Button
            text="Edit Content"
            _onClick={() => {
              editPost();
            }}
          >
            Publish
          </Button>
        ) : (
          <Button
            text="Post Content"
            _onClick={() => {
              addPost();
            }}
          ></Button>
        )}
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
