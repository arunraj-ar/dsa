const countingSort = (arr, exp) => {
  const n = arr.length;
};

const radixSort = (arr) => {
  const max = Math.max(...arr);

  let exp = 1;

  while (Math.floor(max / exp) > 0) {
    countingSort(arr, exp);
    exp *= 10;
  }
};
