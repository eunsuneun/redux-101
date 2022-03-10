import React, { useState } from 'react';

const Detail = () => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  return(
    <>
      <h1>To Do</h1>
      <form>
        <input type="text" value={text}/>
      </form>
      <ul></ul>
    </>
  )
};

export default Detail;