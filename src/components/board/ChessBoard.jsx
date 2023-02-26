import React, { useState } from "react";
import { pieceMapping } from "../../data/PeiceMapping";
import { boardMatrix } from "../../utils/boardMatrix";
import "./board.css";

export const ChessBoard = () => {
  const [availableMoves, setAvailableMoves] = useState([]);
  const handleMove = (possibleMoves) => {
    setAvailableMoves(possibleMoves);
  };
  return (
    <div className="wrapper">
      <div className="board">
        {boardMatrix?.map(([i,j]) => {
          const isBlack = (i + j) % 2 === 0 ? false : true;
          return (
            
            <div
              className={`cell ${isBlack ? "black" : "white"} ${
                availableMoves?.find(([m, n]) => m === i && n === j)
                  ? "highlight"
                  : ""
              }`}
            >
              {i === 7 || i === 2 ? (
                <span
                  onClick={() => {
                    i === 7
                      ? handleMove([
                          [i - 1, j],
                          [i - 2, j],
                        ])
                      : handleMove([
                          [i + 1, j],
                          [i + 2, j],
                        ]);
                  }}
                  style={{ color: "red", fontSize: "10px" }}
                >
                  Pawn
                </span>
              ) : null}

              {i === 8 ? (
                <span
                  onClick={() => {
                    j > 5
                      ? handleMove(pieceMapping[j - 5]?.b?.possibleMoves?.["2"])
                      : handleMove(pieceMapping[j]?.b?.possibleMoves?.["1"]);
                  }}
                  style={{ color: "red", fontSize: "10px" }}
                >
                  {j > 5
                    ? pieceMapping[j - 5]?.b?.image
                    : pieceMapping[j]?.b?.image}
                </span>
              ) : null}

              {i === 1 ? (
                <span
                  onClick={() => {
                    j > 5
                      ? handleMove(pieceMapping[j - 5]?.b?.possibleMoves?.["2"])
                      : handleMove(pieceMapping[j]?.b?.possibleMoves?.["1"]);
                  }}
                  style={{ color: "red", fontSize: "10px" }}
                >
                  {j > 5
                    ? pieceMapping[j - 5]?.w?.image
                    : pieceMapping[j]?.w?.image}
                </span>
              ) : null}

              {/* <span style={{ color: "red" }}>{`${i},${j}`}</span> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
