import React from "react";

export default function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Ratul Chat</span>
        <span className="title">Log In</span>
        <form>
          <input type="text" placeholder="display name"></input>
          <input type="email" placeholder="email"></input>
          <button>Sign in</button>
        </form>
        <p>You do not have an account? Register</p>
      </div>
    </div>
  );
}
