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
      {boardMatrix?.map(([i, j]) => {
        const isBlack = (i + j) % 2 === 0 ? false : true;
        return (
          <div key={`${i} ${j}`}
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
                        [i - 2, j]
                      ])
                    : handleMove([
                        [i + 1, j],
                        [i + 2, j]
                      ]);
                }}
                className="piece"
              >
                <img
                  style={{ width: "100%" }}
                  src={
                    i === 2
                      ? "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/68px-Chess_pdt45.svg.png"
                      : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/68px-Chess_plt45.svg.png"
                  }
                  alt=""
                  className="piece_img"
                />
              </span>
            ) : null}

            {i === 8 ? (
              <span
              onClick={() => {
                pieceMapping[j]?.b?.possibleMoves
                  ? handleMove(pieceMapping[j]?.b?.possibleMoves)
                  : handleMove([]);
              }}
                className="piece"
              >
                <img
                  style={{ width: "100%" }}
                  src={pieceMapping[j]?.w?.image}
                  alt=""
                  className="piece_img"
                />
              </span>
            ) : null}

            {i === 1 ? (
              <span
              onClick={() => {
                pieceMapping[j]?.w?.possibleMoves
                  ? handleMove(pieceMapping[j]?.w?.possibleMoves)
                  : handleMove([]);
              }}
                className="piece"
              >
                <img
                  src={pieceMapping[j]?.b?.image}
                  alt=""
                  style={{ width: "100%" }}
                  className="piece_img"
                />
              </span>
            ) : null}

          
          </div>
        );
      })}
    </div>
  </div>
  );
};
