const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(middle));
  let right = mergeSort(arr.slice(middle, arr.length));

  return mergeSort(left, right);
};

const merge = (left, right) => {
  const result = [];
  while (!!left[0] && !!right[0]) {
    if (left[0] <= right[0]) {
      // console.log('pushing', left[0]);
      result.push(left[0]);
      left.shift();
    } else {
      //console.log("pushing", right[0]);
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