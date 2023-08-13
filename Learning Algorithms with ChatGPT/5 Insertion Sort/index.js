const insertionSort = (arr) => {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }

  return arr;
};

// example

const unsortedArray = [12, 11, 13, 5, 6, 0, -14];
console.log(insertionSort(unsortedArray));