const createArray = (quantity, value) => {
  let array = [];
  for (let i = 0; i < quantity; i++) {
    array.push(value);
  }
  console.log(array);
};

createArray(3, "a");
