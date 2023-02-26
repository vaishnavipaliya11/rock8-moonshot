const pieceMapping = {
  1: {
    b: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/68px-Chess_rdt45.svg.png",
      possibleMoves: [],
    },
    w: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/68px-Chess_rlt45.svg.png",
      possibleMoves: [],
    },
  },
  2: {
    b: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/68px-Chess_ndt45.svg.png",
      possibleMoves: [
        [6, 1],
        [6, 3],
      ],
    },
    w: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/68px-Chess_nlt45.svg.png",
      possibleMoves: [
        [3, 1],
        [3, 3],
      ],
    },
  },
  3: {
    b: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/68px-Chess_bdt45.svg.png",
      possibleMoves: [],
    },
    w: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/68px-Chess_blt45.svg.png",
      possibleMoves: [],
    },
  },
  4: {
    b: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/68px-Chess_qdt45.svg.png",
      possibleMoves: [],
    },
    w: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_qlt45.svg/68px-Chess_qlt45.svg.png",
      possibleMoves: [],
    },
  },
  5: {
    b: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/68px-Chess_kdt45.svg.png",
      possibleMoves: [],
    },
    w: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/68px-Chess_klt45.svg.png",
      possibleMoves: [],
    },
  },
  8: {
    b: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/68px-Chess_rdt45.svg.png",
      possibleMoves: [],
    },
    w: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/68px-Chess_rlt45.svg.png",
      possibleMoves: [],
    },
  },
  7: {
    b: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/68px-Chess_ndt45.svg.png",
      possibleMoves: [
        [6, 6],
        [6, 8],
      ],
    },
    w: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/68px-Chess_nlt45.svg.png",
      possibleMoves: [ [3, 6],
      [3, 8]],
    },
  },
  6: {
    b: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/68px-Chess_bdt45.svg.png",
      possibleMoves: [],
    },
    w: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/68px-Chess_blt45.svg.png",
      possibleMoves: [],
    },
  },
};

export { pieceMapping };
