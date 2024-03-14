function gradingStudents(grades) {
  let res = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      res.push(grades[i]);
    } else {
      let nextMul5 = Math.ceil(grades[i] / 5) * 5;
      res.push(nextMul5 - grades[i] < 3 ? nextMul5 : grades[i]);
    }
  }
  return res;
}
console.log(gradingStudents([73, 67, 38, 33]));
