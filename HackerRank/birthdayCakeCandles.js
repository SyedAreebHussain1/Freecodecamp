function birthdayCakeCandles(candles) {
  const max = Math.max(...candles);
  return candles.filter((val) => val === max).length;
}
console.log(birthdayCakeCandles([3, 2, 1, 3]));
