import React, { FC } from "react";
import {
  Accordion, Card, Button, Badge,
} from "react-bootstrap";
// иконка - индикатор статуса пользователя
import { RiRadioButtonLine } from "react-icons/ri";

// компонент принимает объект с пользователями - нормализованную структуру
const UserList: FC<any> = ({ users }) => {
  // преобразуем структуру в массив
  const usersArr = Object.entries(users);
  // получаем массив вида (массив подмассивов)
  // [ ['1', { username: 'Alice', online: false }], ['2', {username: 'Bob', online: false}] ]

  // количество активных пользователей
  const activeUsers = Object.values(users)
    // получаем массив вида
    // [ {username: 'Alice', online: false}, {username: 'Bob', online: false} ]
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    .filter((u) => u.online).length;

  return (
    <Accordion className="mt-4">
      <Card>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Card.Header bg="none">
          <Accordion.Toggle
            as={Button}
            variant="info"
            eventKey="0"
            style={{ textDecoration: "none" }}
          >
            Active users
            {" "}
            <Badge variant="light" className="ml-1">
              {activeUsers}
            </Badge>
          </Accordion.Toggle>
        </Card.Header>
        {usersArr.map(([userId, obj]) => (
          <Accordion.Collapse eventKey="0" key={userId}>
            <Card.Body>
              <RiRadioButtonLine
                className={`mb-1 ${
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  obj.online ? "text-success" : "text-secondary"
                }`}
                size="0.8em"
              />
              {" "}
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-ignore */}
              {obj.username}
            </Card.Body>
          </Accordion.Collapse>
        ))}
      </Card>
    </Accordion>
  );
};

export default UserList;
