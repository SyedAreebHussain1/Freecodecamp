function timeConversion(s) {
  const splitStr = s.split(":");
  const meridiem = splitStr[splitStr.length - 1].substring(
    splitStr[splitStr.length - 1].length - 2,
    splitStr[splitStr.length - 1].length
  );
  if (meridiem === "PM" || meridiem === "pm") {
    for (let i = 12; i < 24; i++) {
      if (Number(splitStr[0]) + 12 == i) {
        const hour = Number(splitStr[0]) + 12;
        splitStr[0] = hour.toString();
      }
    }
  } else {
    for (let i = 1; i < 13; i++) {
      if (Number(splitStr[0]) === 12) {
        splitStr[0] = "00";
      }
    }
  }
  return splitStr.join(":").substring(0, splitStr.join(":").length - 2);
}

timeConversion("07:30:45PM"); //20:30:45
timeConversion("12:30:45AM");
timeConversion("11:30:45AM");
