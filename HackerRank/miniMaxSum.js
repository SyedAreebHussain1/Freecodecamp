function miniMaxSum(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((acc, curr) => acc + curr);
  console.log(sum - max, sum - min);
}
miniMaxSum([5, 5, 5, 5, 5]);
miniMaxSum([1, 2, 3, 4, 5]);
miniMaxSum([7, 69, 2, 221, 8974]);
