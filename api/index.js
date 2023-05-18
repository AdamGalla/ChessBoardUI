const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const bodyParser = require("body-parser");

const app = express();

app.use(cors({}));

app.use(bodyParser.json());

app.post('/api/updateBoard', (req, res) => {
    console.log('Received POST request:', req.body);
    socket.emit("boardUpdate", req.body);
  res.send('Received your request!');
});

const restServer = http.createServer(app);
const socketServer = http.createServer();

const io = new Server(socketServer, {
    cors: {
        origin: "http://127.0.0.1:5173",
        methods: ["GET", "POST"],
    }
});

io.on("connection", async (socket) => {
    console.log("Socket connected with id:", socket.id)
})


socketServer.listen(3001, () => {
    console.log("SOCKET IO SERVER RUNNING, listening on port: 3001");
});

restServer.listen(3002, () => {
    console.log("REST API SERVER RUNNING, listening on port: 3002");
});