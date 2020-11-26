function chunckArray(array, division) {
  let chuncked = [];

  for (let element of array) {
    let last = chuncked[chuncked.length - 1];

    if (!last || last.length === division) {
      chuncked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chuncked;
}

console.log(chunckArray([1, 2, 3, 4, 5], 2));
