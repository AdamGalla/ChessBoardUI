const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const { default: axios } = require("axios");

const app = express();

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
});

io.on("connection", async (socket) => {
    console.log("Client connected to sockert:")
})

app.use(cors());

app.post('/api/updateBoard', (req, res) => {
    console.log('Received POST request:', req.body);
  res.send('Received your request!');
});

const server = http.createServer(app);

server.listen(3001, () => {
    console.log("SERVER RUNNING, listening on port: 3001");
});