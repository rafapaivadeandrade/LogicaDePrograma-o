function removeElement(array, el1, el2) {
  array.filter(function (value, index) {
    if (value === el1) {
      array.splice(index, 1);
    }
    if (value === el2) {
      array.splice(index, 1);
    }
  });
  return [...array];
}

console.log(removeElement([5, 4, 3, 2, 5], 5, 3));
