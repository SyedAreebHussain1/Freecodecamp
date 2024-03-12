function aVeryBigSum(ar) {
  let array = ar.reduce((accum, current) => {
    return accum + current;
  });
  return array;
}
aVeryBigSum([1, 2, 3, 4, 5, 6, 7]);
