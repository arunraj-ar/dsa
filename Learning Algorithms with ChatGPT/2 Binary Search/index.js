const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

//example

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const target = 15;
console.log(binarySearch(sortedArray, target));

// revising

const binarySearch2 = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (target === arr[mid]) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

//example

const sortedArr = [-1, 0, 1, 3, 5, 7, 9, 11, 13, 15, 17];
const tgt = 15;
console.log(binarySearch2(sortedArr, tgt));
