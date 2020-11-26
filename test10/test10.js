function commonValues(array1, array2) {
  return array1.filter((value) => array2.includes(value));
}

console.log(commonValues([6, 8], [8, 9]));
