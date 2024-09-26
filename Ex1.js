// Breaking chocolate problem
function breakChocolate(n, m) {
  // Calculate the total number of chocolate pieces
  const totalPieces = n * m;

  // Return 0 if there are no pieces to break
  if (totalPieces === 0) {
    return 0;
  }

  // Return the total number of pieces minus 1 (since the last piece doesn't need breaking)
  return totalPieces - 1;
}

console.log(breakChocolate(5, 5));