import React from "react";

import { Grid, Text, Button, Image, Input } from "../elements";
import Upload from "../shared/Upload";

const PostWrite = (props) => {
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
