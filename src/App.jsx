import React from "react";
import { useStateValue } from "./components/StateProvider";
import { Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

import "./css/app.css";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />

          <Switch>
            <Route
              path="/rooms/:roomId"
              render={(props) => <Chat {...props} user={user} />}
            />
            <Route path="/rooms" />
          </Switch>
        </div>
      )}
    </div>
  );
}

export default App;
