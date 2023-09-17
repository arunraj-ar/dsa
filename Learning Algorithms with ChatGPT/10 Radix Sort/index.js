const countingSort = (arr, exp) => {
  const n = arr.length;
  const output = new Array(n);
  const count = new Array(10).fill(0);

  for (let i = 0; i < n; i++) {
    let index = Math.floor(arr[i] / exp) % 10;
    count[index]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    let index = Math.floor(arr[i] / exp) % 10;
    output[count[index] - 1] = arr[i];
    count[index]--;
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
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

let unsortedArr = [4, 2, 2, 8, 3, 3, 1, 1];
radixSort(unsortedArr);
console.log(unsortedArr);
