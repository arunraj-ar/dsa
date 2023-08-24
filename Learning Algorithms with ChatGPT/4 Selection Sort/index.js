const selectionSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

// example

const unsortedArray = [64, 25, 12, 22, 11, -5, 0];
console.log(selectionSort(unsortedArray));

// revising

const selectionSort2 = (arr) => {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let minIdx = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }

    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }

  return arr;
};

// example

const unsortedArr = [64, 25, 12, 22, 11, -5, 0, 200, -200, 0, -5, 1, 12];
console.log(selectionSort2(unsortedArr));
