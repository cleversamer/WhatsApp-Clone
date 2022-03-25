import React from "react";
import { Button } from "@material-ui/core";

import "../css/login.css";

function Login() {
  const handleSignIn = () => {};

  return (
    <div className="login">
      <img className="login__image" src="icon.png" alt="WhatsApp logo" />

      <div className="login__text">
        <h1>Sign In With</h1>
      </div>

      <Button type="submit" variant="contained" onClick={handleSignIn}>
        Google
      </Button>
    </div>
  );
}

export default Login;
