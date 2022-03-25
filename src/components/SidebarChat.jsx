import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import db from "../firebase";
import { Avatar } from "@material-ui/core";

import "../css/sidebar-chat.css";

function SidebarChat({ addNewChat, name, id }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter the name of the chat");
    if (roomName) db.collection("rooms").add({ name: roomName });
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebar-chat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="sidebar-chat__info">
          <h2>{name}</h2>

          <p>Last message...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebar-chat">
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat;
