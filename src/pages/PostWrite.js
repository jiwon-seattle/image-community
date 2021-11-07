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

  const post_id = props.match.params.id;
  const is_edit = post_id ? true : false;

  const { history } = props;

  let _post = is_edit ? post_list.find((p) => p.id === post_id) : null;

  const [contents, setContents] = React.useState(_post ? _post.contents : "");

  React.useEffect(() => {
    if (is_edit && !_post) {
      console.log("포스트 정보가 없어요!");
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
          Ah! Wait!
        </Text>
        <Text size="16px">You can write a post after you log in!</Text>
        <Button
          _onClick={() => {
            history.replace("/");
          }}
        >
          Log In!
        </Button>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text margin="0px" size="36px" bold>
          {is_edit ? "Edit post" : "Write post"}
        </Text>
        <Upload />
      </Grid>

      <Grid>
        <Grid padding="16px">
          <Text margin="0px" size="24px" bold>
            Preview
          </Text>
        </Grid>

        <Image
          shape="rectangle"
          src={preview ? preview : "http://via.placeholder.com/400x300"}
        />
      </Grid>

      <Grid padding="16px">
        <Input
          value={contents}
          _onChange={changeContents}
          label="Post content"
          placeholder="Write post"
          multiLine
        />
      </Grid>

      <Grid padding="16px">
        {is_edit ? (
          <Button text="Edit post" _onClick={editPost}></Button>
        ) : (
          <Button text="Write post" _onClick={addPost}></Button>
        )}
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
