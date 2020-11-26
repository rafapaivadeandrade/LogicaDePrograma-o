function cleanItems(input) {
  return input.filter(Boolean);
}

console.log(cleanItems([1, 2, "", undefined]));
