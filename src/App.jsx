import React from "react";
import { Route, Switch } from "react-router-dom";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import "./css/app.css";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />

        <Switch>
          <Route path="/rooms/:roomId" component={Chat} />
          <Route path="/rooms" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
