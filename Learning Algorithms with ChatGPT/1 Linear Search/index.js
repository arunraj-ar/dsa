const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; ++i) {
    if (target === arr[i]) return i;
  }
  return -1;
};

// example

const array = [4, 2, 8, 1, 6, 5];
const target = 1;
console.log(linearSearch(array, target)); 
