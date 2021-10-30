import React from "react";
import _ from "lodash";

const Search = () => {
  const debounce = _.debounce((value) => {
    console.log("debounce ::: " + value);
  }, 1000);

  const [text, setText] = React.useState("");
  const keyPress = React.useCallback(debounce, []); // function memoization

  const onChange = (e) => {
    setText(e.target.value);
    keyPress(e);
  };

  const throttle = _.throttle((e) => {
    console.log("throttle ::: " + e.target.value);
  }, 1000);
  return (
    <div>
      <input type="text" onChange={onChange} value={text} />
    </div>
  );
};

export default Search;
