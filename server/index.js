const app = require("express")()
require("dotenv").config();

const http = require("http").Server(app);
const io = require("socket.io")(http);

const PORT = process.env.PORT || 7000;

http.listen(PORT, () => {
  console.log(`Socket.IO server running at http://localhost:${PORT}/`);
});
