function removeChunckedArray(chunckedArray) {
  var newArray = [];

  chunckedArray.filter(function (element) {
    if (typeof element === "object") {
      element.filter(function (item) {
        newArray.push(item);
      });
    } else {
      newArray.push(element);
    }
  });
  return newArray;
}
console.log(removeChunckedArray([1, 2, [3], [4, 5]]));
