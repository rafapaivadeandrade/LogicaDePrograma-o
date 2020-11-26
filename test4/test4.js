function convertArrayIntoObject(array) {
  var object = {};
  array.forEach(function (element) {
    object[element[0]] = element[1];
  });
  return object;
}

console.log(
  convertArrayIntoObject([
    ["c", 2],
    ["d", 4],
  ])
);
