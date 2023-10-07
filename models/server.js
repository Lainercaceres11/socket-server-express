
const cors = require("cors")
const express = require("express");
const { socketController } = require("../sockets/socketController");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //Server de socket
    this.server = require("http").createServer(this.app)

    //Informacion del cliente
    this.io = require("socket.io")(this.server)

    //Sockets
    this.sockets()

    // Middlewares
    this.middlewares();
  }

  sockets(){
    this.io.on("connection", socketController)
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Directorio Público
    this.app.use(express.static("public"));
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}
module.exports = {
    Server
}
