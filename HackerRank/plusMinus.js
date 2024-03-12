function plusMinus(arr) {
  let countPosNo = 0;
  let countNegNo = 0;
  let countZero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      countPosNo += 1;
    } else if (arr[i] < 0) {
      countNegNo += 1;
    } else {
      countZero += 1;
    }
  }
  console.log(
    `${(countPosNo / arr.length).toFixed(arr.length)}\n${(
      countNegNo / arr.length
    ).toFixed(arr.length)}\n${(countZero / arr.length).toFixed(arr.length)}`
  );
}
plusMinus([-4, 3, -9, 0, 4, 1]);
