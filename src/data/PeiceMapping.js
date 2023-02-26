const pieceMapping = {
    1: {
      b: { image: "blackRooks", possibleMoves: [] },
      w: { image: "shiteRooks", possibleMoves: [] }
    },
    2: {
      b: {
        image: "blackKnights",
        possibleMoves: {
          1: [
            [6, 1],
            [6, 3]
          ],
          2: [
            [6, 6],
            [6, 8]
          ]
        }
      },
      w: { image: "whiteknights", possibleMoves: [] }
    },
    3: {
      b: { image: "blackBishops", possibleMoves: [] },
      w: { image: "whiteBishops", possibleMoves: [] }
    },
    4: {
      b: { image: "whiteQueen", possibleMoves: [] },
      w: { image: "blackQueen", possibleMoves: [] }
    },
    5: {
      b: { image: "whiteKing", possibleMoves: [] },
      w: { image: "blackKing", possibleMoves: [] }
    }
  };

  export {pieceMapping}