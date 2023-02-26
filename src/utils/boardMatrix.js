const boardMatrix = [];

for (let i = 1; i <= 8; i++) {
  for (let j = 1; j <= 8; j++) {
    boardMatrix.push([i, j]);
  }
}

export { boardMatrix };