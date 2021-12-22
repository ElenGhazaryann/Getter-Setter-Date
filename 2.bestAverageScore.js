function getBestStudent(obj) {
  let avg1 = obj.John.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  avg1 = avg1 / obj.John.length;
  let avg2 = obj.Bob.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  avg2 = avg2 / obj.Bob.length;
  return avg1 > avg2 ? "John" : "Bob";
}
console.log(
  getBestStudent({
    John: [100, 90, 80],
    Bob: [100, 70, 80],
  })
);
