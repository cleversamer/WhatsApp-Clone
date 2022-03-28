import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import firebase from "firebase";
import db from "../firebase";
import { Avatar, IconButton } from "@material-ui/core";
import {
  SearchOutlined,
  AttachFile,
  MoreVert,
  InsertEmoticon,
  Mic,
} from "@material-ui/icons";

import "../css/chat.css";

const Chat = ({ user }) => {
  const [seed, setSeed] = useState("");
  const [message, setMessage] = useState("");
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const { roomId } = useParams();

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setMessages(
            snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        });
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (roomId) {
      db.collection("rooms").doc(roomId).collection("messages").add({
        uid: user.uid,
        name: user.displayName,
        message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }

    console.log(firebase.firestore.FieldValue.serverTimestamp());

    setMessage("");
  };

  const parseTimestamp = (timestamp) => {
    try {
      let time = timestamp.split(" ")[4];
      time = time.split(":");
      let hour = parseInt(time[0]);
      let meridiem = "AM";
      if (hour > 12) {
        meridiem = "PM";
      }
      let minutes = parseInt(time[1]);
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      time = hour + ":" + minutes + meridiem;
      console.log(timestamp);
      return time;
    } catch (ex) {
      return timestamp;
    }
  };

  const parseChatName = (name) => {
    const result = name.split(" ")[0];
    if (result.length > 8) {
      const letters = result.split("");
      return letters[0] + letters[1] + letters[2];
    }

    return result;
  };

  return (
    <div className="chat">
      <header className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="chat__header-info">
          <h3>{roomName || "Unknown"}</h3>
          <p>
            Last seen at{" "}
            {parseTimestamp(
              new Date(
                messages[messages.length - 1]?.timestamp?.toDate()
              ).toUTCString()
            )}
          </p>
        </div>

        <header className="chat__header-right">
          <IconButton>
            <SearchOutlined />
          </IconButton>

          <IconButton>
            <AttachFile />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </header>
      </header>

      <div className="chat__body">
        {messages.map((message) => (
          <p
            key={message.id}
            className={`chat__message chat ${
              message.uid === user.uid && "chat--receiver"
            }`}
          >
            <span className="chat__name">{parseChatName(message.name)}</span>

            {message.message}

            <span className="chat__timestamp">
              {parseTimestamp(
                new Date(message.timestamp?.toDate()).toUTCString()
              )}
            </span>
          </p>
        ))}
      </div>

      <footer className="chat__footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>

        <form>
          <input
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
            type="text"
            placeholder="Send a message..."
          />

          <button type="submit" onClick={sendMessage}>
            Send a message
          </button>
        </form>

        <IconButton>
          <Mic />
        </IconButton>
      </footer>
    </div>
  );
};

export default Chat;
