import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { DonutLarge, Chat, MoreVert, SearchOutlined } from "@material-ui/icons";

import "../css/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <header className="sidebar__header">
        <Avatar />

        <div className="sidebar__header-right">
          <IconButton>
            <DonutLarge />
          </IconButton>

          <IconButton>
            <Chat />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </header>

      <div className="sidebar__search">
        <div className="sidebar__search-container">
          <SearchOutlined />
          <input type="text" placeholder="Search or start a new chat" />
        </div>
      </div>

      <div className="sidebar__chats"></div>
    </div>
  );
}

export default Sidebar;
