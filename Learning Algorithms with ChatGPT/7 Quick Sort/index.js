const quickSort = (arr, low, high) => {
  if (low < high) {
    let pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
};

const partition = (arr, low, high) => {
  let pivot = arr[high];
  let i = low - 1;

  for (j = low; (j = high - 1); j++) {
    if (arr[j] < pivot) {
      i = i + 1;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]];
  return i + 1;
};

// example

const unsortedArray = [10, 7, 8, 9, 1, 5];
quickSort(unsortedArray, 0, unsortedArray.length - 1);
console.log(unsortedArray); // Should output the sorted array
