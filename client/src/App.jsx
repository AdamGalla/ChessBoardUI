import { useState } from "react";
import { useEffect, useContext } from "react";
import io from "socket.io-client";
import Chessboard from "chessboardjsx";
import "./App.css";

const socket = io.connect("http://localhost:3001");

function App() {
  const [fen, setFen] = useState("");

  const clearBoard = () => {
    setFen("")
  }

  const initialBoard = () => {
    setFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")
  }

  useEffect(() => {
    socket.on("boardUpdate", (data) => {
      console.log(data);
      setFen(data)
    });
  }, [socket]);

  return (
    <>
      <div>
        <Chessboard position={fen} width={1000}></Chessboard>
      </div>
      <div>
        <button className="button" onClick={clearBoard}> Clear the board </button>
        <button className="button" onClick={initialBoard}> Starting position </button>
      </div>
    </>
  );
}

export default App;
