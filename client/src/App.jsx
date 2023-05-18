import { useState } from "react";
import { useEffect, useContext } from "react";
import io from "socket.io-client";
import Chessboard from "chessboardjsx";
import "./App.css";

const socket = io.connect("http://localhost:3001");

function App() {
  const [fen, setFen] = useState("");

  useEffect(() => {
    socket.on("boardUpdate", (data) => {
      console.log(data);
      setFen(data)
    });
  }, [socket]);

  return (
    <>
      <div>
        <Chessboard position={fen} width={400}></Chessboard>
      </div>
    </>
  );
}

export default App;
