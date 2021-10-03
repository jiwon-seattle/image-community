import React from 'react'

const Post = (props) => {
  return (
    <React.Fragment>
        <div>
          user profile / user name / insert_dt / is_me (edit btn)
        </div>
        <div>
          contents
        </div>
        <div>
          image
        </div>
        <div>
          comment cnt
        </div>
    </React.Fragment>
  )
}

Post.defaultProps = {
  user_info: {
    user_name: "jiwon",
    user_profile: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1886&q=80",
  },
  image_url: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1886&q=80",
  contents: "Flower",
  comment_cnt: 10,
  insert_dp: "2021-10-3 14:10:00",
};

export default Post;