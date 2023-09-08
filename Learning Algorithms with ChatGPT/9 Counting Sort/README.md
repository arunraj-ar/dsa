# Pseudo Code

```
function countingSort(arr):
    max = findMax(arr);
    min = findMin(arr);

    count = new Array(max - min  + 1)

    for i from 0 to max - min:
        count[i] = 0

    for i from 0 to length of arr - 1:
        count[arr[i] - min]++

    for i from 1 to length of count - 1:
        count[i] += count[i-1]

    let output = new Array(length of arr)

    for i from length of arr - 1 to 0:
        output[count[arr[i] -min] - 1] = arr[i]
        count[arr[i] -min] --

    for i from 0 to length of arr -1:
        arr[i] = output[i]
```
