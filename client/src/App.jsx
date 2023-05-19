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
    <div className="content">
    <h1 className="title">Chess Wars</h1>
    </div>
      <div>
        <Chessboard className="board" position={fen} width={500}></Chessboard>
      </div>
      <div>
        <button className="button" onClick={clearBoard}> Clear the board </button>
        <button className="button" onClick={initialBoard}> Starting position </button>
      </div>
    </>
  );
}

export default App;
