const firstRecurring = (arr) => {
  const hashmap = {};
  let output;
  arr.every((element) => {
    console.log(hashmap, element);
    if (hashmap[element]) {
      console.log("element found: ", element);
      output = element;
      return false;
    } else {
      hashmap[element] = true;
      return true;
    }
  });
  return output;
};

const input = [1, 0, 2, 3, 2, 4, 3, 1];
const output = firstRecurring(input);
document.getElementById("output").innerHTML = `<h2>${output}</h2>`;
console.log(input);
console.log(output);
