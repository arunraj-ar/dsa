let arr = [2,5,1,2,3,5,1,2,4];
let arr2 = [2,1,1,2,3,5,1,2,4];
let arr3 = [2,3,4,5];
let arr4 = [2,5,5,2,3,5,1,2,4];
function firstRepeat(arr) {
  let map = new Set();
  for (let i = 0; i < arr.length; i++){
    if(map.has(arr[i])){
      return arr[i];
    }
    map.add(arr[i]);
  }
  return undefined;
}

console.log(firstRepeat(arr4));