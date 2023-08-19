const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));

  return merge(left, right);
};

const merge = (left, right) => {
  let result = [];
  while (typeof left[0] !== "undefined" && typeof right[0] !== "undefined") {
    if (left[0] <= right[0]) {
      result.push(left[0]);
      left.shift();
    } else {
      result.push(right[0]);
      right.shift();
    }
  }
  return result.concat(left, right);
};

// example

const unsortedArray = [12, 11, 13, 5, 6, 7, 0, -13];
console.log(mergeSort(unsortedArray));
