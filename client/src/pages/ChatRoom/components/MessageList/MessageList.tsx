import React, { useRef, useEffect, FC } from "react";
// стили
import { ListGroup } from "react-bootstrap";
// компонент
import MessageListItem from "@/UI/MessageListItem";

// пример встроенных стилей (inline styles)
const listStyles = {
  height: "80vh",
  border: "1px solid rgba(0,0,0,.4)",
  borderRadius: "4px",
  overflow: "auto",
};

// функция принимает массив сообщений и функцию для удаления сообщений
// функция для удаления сообщений в виде пропа передается компоненту "MessageListItem"
const MessageList: FC<any> = ({ messages, removeMessage }) => {
  // данный "якорь" нужен для выполнения прокрутки при добавлении в список нового сообщения
  const messagesEndRef = useRef<any>(null);

  // плавная прокрутка, выполняемая при изменении массива сообщений
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <>
      <ListGroup variant="flush" style={listStyles}>
        {messages.map((msg: any) => (
          <MessageListItem
            key={msg.messageId}
            msg={msg}
            removeMessage={removeMessage}
          />
        ))}
        <span ref={messagesEndRef} />
      </ListGroup>
    </>
  );
};

export default MessageList;
