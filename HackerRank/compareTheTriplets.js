function compareTriplets(a, b) {
  let countOne = 0;
  let countTwo = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      countOne += 1;
    } else if (a[i] < b[i]) {
      countTwo += 1;
    }
  }
  return [countOne, countTwo];
}
compareTriplets([5, 6, 7], [3, 6, 10]);
compareTriplets([17, 28, 30], [99, 16, 8]);
