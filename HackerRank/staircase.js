function staircase(n) {
  function convertToStaircase(staircaseArray) {
    return staircaseArray.map((row) => {
      const stair = row.filter((char) => char === "#").join("");
      const padding = " ".repeat(row.length - stair.length);
      return padding + stair;
    });
  }
  let arr = [];
  for (let index = 0; index < n; index++) {
    arr.push("");
  }
  let str = "";
  let arr2 = [];
  for (let index = 0; index < n; index++) {
    str += "#";
    for (let j = 0; j < str[index].length; j++) {
      const element = arr;
      element.push(str[index]);
      if (index >= 0) {
        const newArr = element.slice(str.length);
        arr2.push(newArr);
        break;
      }
    }
  }
  const res = convertToStaircase(arr2);
  return res.forEach((row) => console.log(row));
}

staircase(6);
