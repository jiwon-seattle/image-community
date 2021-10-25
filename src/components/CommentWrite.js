import React from "react";

import { Grid, Input, Button } from "../elements/";

const CommentWrite = () => {
  return (
    <React.Fragment>
      <Grid padding="16px" is_flex>
        <Input placeholder="Add a public comments..." />
        <Button width="50px" margin="0px 2px 0px 2px">
          Comment
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default CommentWrite;
