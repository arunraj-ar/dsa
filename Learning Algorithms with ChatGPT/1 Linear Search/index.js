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

// revising

const linearSearch2 = (arr, target) => {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

// example

const arr = [4, 2, 8, 1, 6, 5, 0, -12];
const tgt = 6;
console.log(linearSearch2(arr, tgt));
