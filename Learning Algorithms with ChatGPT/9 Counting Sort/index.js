const countingSort = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const count = new Array(max - min + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++;
  }

  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  let output = new Array(arr.length);

  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
};


let unsortedArray = [4, 2, 2, 8, 3, 3, 1, 0, -1, -1, 0];
countingSort(unsortedArray);
console.log(unsortedArray);
