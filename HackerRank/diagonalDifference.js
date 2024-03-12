function diagonalDifference(arr) {
  let countOne = 0;
  let countTwo = 0;
  for (let i = 0; i < arr[0].length; i++) {
    countOne += arr[i][i];
  }
  for (let i = 0; i < arr[0].length; i++) {
    countTwo += arr[i].reverse()[i];
  }
  return Math.abs(countOne - countTwo);
}
console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
console.log(
  diagonalDifference([
    [-10, 3, 0, 5, -4],
    [2, -1, 0, 2, -8],
    [9, -2, -5, 6, 0],
    [9, -7, 4, 8, -2],
    [3, 7, 8, -5, 0],
  ])
);
console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);
