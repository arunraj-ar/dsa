const quickSort = (arr, low, high) => {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
};

const partition = (arr, low, high) => {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
};

// example

const unsortedArray = [10, 7, 8, 9, 1, 5, -1, 0, -1, 1, 0];
quickSort(unsortedArray, 0, unsortedArray.length - 1);
console.log(unsortedArray);
