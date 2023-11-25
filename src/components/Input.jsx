import React from "react";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something" />
      <div className="send">
        <img src="" alt=""></img>
        <input type="file" style={{ display: "none" }} id="file"></input>
        <label htmlFor="file">
          <img src=""></img>
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
