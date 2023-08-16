const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(middle));
  let right = mergeSort(arr.slice(middle, arr.length));

  return mergeSort(left, right);
};
