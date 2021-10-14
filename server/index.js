const http = require("http").createServer();
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  }
});

require("dotenv").config();

const log = console.log

const registerMessageHandlers = require("./services/message.service")
const registerUserHandlers = require("./services/user.service")

const onConnection = (socket) => {
  log('User connected')

  // получаем название комнаты из строки запроса "рукопожатия"
  const { roomId } = socket.handshake.query
  // сохраняем название комнаты в соответствующем свойстве сокета
  socket.roomId = roomId

  // присоединяемся к комнате (входим в нее)
  socket.join(roomId)

  // регистрируем обработчики
  // обратите внимание на передаваемые аргументы
  registerMessageHandlers(io, socket)
  registerUserHandlers(io, socket)

  // обрабатываем отключение сокета-пользователя
  socket.on('disconnect', () => {
    // выводим сообщение
    log('User disconnected')
    // покидаем комнату
    socket.leave(roomId)
  })
}

io.on('connection', onConnection)

const PORT = process.env.PORT || 7000;
http.listen(Number(PORT), () => {
  console.log(`Socket.IO server running at http://localhost:${PORT}/`);
});

