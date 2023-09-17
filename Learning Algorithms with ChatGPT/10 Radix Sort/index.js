const countingSort = (arr, exp) => {
  const n = arr.length;
  const output = new Array(n);
  const count = new Array(10).fill(10);

  for (let i = 0; i < n - 1; i++) {
    let index = Math.floor(arr[i] / exp) % 10;
    count[index]++;
  }
};

const radixSort = (arr) => {
  const max = Math.max(...arr);

  let exp = 1;

  while (Math.floor(max / exp) > 0) {
    countingSort(arr, exp);
    exp *= 10;
  }
};
