# Pseudo Code

```
function countingSort(arr, exp):
    n = length of arr
    output = new Array(n)
    count = new Array(10).fill(0)

    fot i from 0 to n - 1:
        index = (arr[i] / exp) % 10
        count[index]++
    
    for i from 1 to 9:
        count[i] += count[i - 1]
    
    for i from n - 1 down to 0:
        index = (arr[i] / exp) % 10
        output[count[index] - 1] - arr[i]
        count[index]--
    
    for i from 0 to n - 1
        arr[i] = output[i]

    
function radixSort(arr):
    max = getMax(arr)

    exp = 1
    while (max / exp) > 0:
        countingSort(arr, exp)
        exp *= 10
```