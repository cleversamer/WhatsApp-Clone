import React from "react";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import "./css/app.css";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
