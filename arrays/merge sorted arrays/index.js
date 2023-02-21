const mergeSortedArrays = (arr1, arr2) => {
  let idx1 = 0;
  let idx2 = 0;
  let resultArr = [];
  while (idx1 < arr1.length || idx2 < arr2.length) {
    if (arr1[idx1] && arr2[idx2]) {
      if (arr1[idx1] <= arr2[idx2]) {
        resultArr.push(arr1[idx1]);
        idx1++;
      }
      if (arr1[idx1] >= arr2[idx2]) {
        resultArr.push(arr2[idx2]);
        idx2++;
      }
    } else {
      if (idx1 < arr1.length) {
        resultArr.push(arr1[idx1]);
        idx1++;
      }
      if (idx2 < arr2.length) {
        resultArr.push(arr2[idx2]);
        idx2++;
      }
    }
  }
  return resultArr;
};

const input = [
  [1, 3, 5, 6, 9],
  [2, 4, 7],
];
const output = mergeSortedArrays(input[0], input[1]);
document.getElementById("output").innerHTML = `<h2>${output}</h2>`;
console.log(input);
console.log(output);
