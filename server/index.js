const express = require("express")
require("dotenv").config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 7000;
const start = () => {
  try {
    app.listen(PORT, () =>
      console.log(`SERVER was been start on ${PORT} port.`)
    );
  } catch (e) {
    console.log(e);
  }
};

start();
