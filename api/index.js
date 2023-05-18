const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://127.0.0.1:5173",
        methods: ["GET", "POST"],
    }
});

io.on("connection", async (socket) => {
    console.log("Socket connected with id:", socket.id)
})



app.post('/api/updateBoard', (req, res) => {
    console.log('Received POST request:', req.body);
    socket.emit("boardUpdate", req.body);
  res.send('Received your request!');
});



server.listen(3001, () => {
    console.log("SERVER RUNNING, listening on port: 3001");
});