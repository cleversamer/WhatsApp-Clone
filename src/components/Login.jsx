import React from "react";
import { Button } from "@material-ui/core";

import "../css/login.css";

function Login() {
  const handleSignIn = () => {};

  return (
    <div className="login">
      <div className="login__body">
        <img className="login__image" src="icon.png" alt="WhatsApp logo" />

        <div className="login__text">
          <h1>Sign In With</h1>
        </div>

        <Button type="submit" variant="contained" onClick={handleSignIn}>
          Google
        </Button>
      </div>

      <h2 className="login__rights">
        © 2022{" "}
        <a href="https://twitter.com/ssadawi__" target="__blank">
          Samer A.
        </a>
        <br />
        All Rights Reserved
      </h2>
    </div>
  );
}

export default Login;
