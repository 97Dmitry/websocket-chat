import React, { FC } from "react";

import { useParams } from "react-router-dom";
// hooks
import { useLocalStorage, useChat } from "@/hooks";
// components
import { Container } from "react-bootstrap";
import MessageForm from "./components/MessageForm";
import MessageList from "./components/MessageList";
import UserList from "./components/UserList";
// styles

const ChatRoom: FC = () => {
  const { roomId } = useParams<any>();
  const [username] = useLocalStorage("username");
  const {
    users, messages, sendMessage, removeMessage,
  } = useChat(roomId);

  return (
    <Container>
      <h2 className="text-center">
        Room:
        {roomId === "job" ? "Job" : "Free"}
      </h2>
      <UserList users={users} />
      <MessageList messages={messages} removeMessage={removeMessage} />
      <MessageForm username={username} sendMessage={sendMessage} />
    </Container>
  );
};

export default ChatRoom;
