import React from "react";

export default function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Ratul Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name"></input>
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="password"></input>
          <input style={{ display: "none" }} type="file" id="file"></input>
          <label htmlFor="file">
            <span>Add an Avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
}
