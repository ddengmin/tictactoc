import React, { useState } from "react";
import Square from "./Square";
import "./Board.css";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  //getter, setter
  const [xIsNext, setxIsNext] = useState(true);
  //getter, setter

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      //승자 경우의 수
    ];
    for (let index = 0; index < lines.length; index++) {
      const [a, b, c] = lines[index];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner : " + winner;
  } else {
    status = "Next Player : " + (xIsNext ? "X" : "O");
  }

  const handleClick = (i) => {
    const newSquares = squares.slice();
    console.log("newSquares", newSquares);
    console.log("newSquares[i]", newSquares[i]);
    if (calculateWinner(newSquares) || squares[i]) {
      return;
    }

    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setxIsNext((prev) => !prev);
    //삼항연산자를 사용 그 이후, 전에 떴던 모양을 안뜨게 해줌
  };
  //함수형 컴포넌트로 바꿔줌 #1

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };
  //함수형 컴포넌트로 바꿔줌 #2 (밑에 renderSquare도 똑같이 바꿔줌)

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
