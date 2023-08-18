const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle, arr.length));

  return merge(left, right);
};

const merge = (left, right) => {
  let result = [];
  while (!!left[0] && !!right[0]) {
    if (left[0] <= right[0]) {
      result.push(left[0]);
      left.shift();
    } else {
      result.push(right[0]);
      right.shift();
    }

    result = result.concat(left, right);
  }

  return result;
};

// example

const unsortedArray = [12, 11, 13, 5, 6, 7];
console.log(mergeSort(unsortedArray));
