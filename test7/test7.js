function isEquivalent(a, b) {
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
var result = isEquivalent([1, 2, 3], [1, 3, 3]);

console.log(result);
