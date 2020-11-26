function reverseArry(input) {
  let array = new Array();
  for (let i = input.length - 1; i >= 0; i--) {
    array.push(input[i]);
  }
  return array;
}

console.log(reverseArry([3, 5, 7, 8]));
