# Pseudo Code

```
function selectionSort(arr):
    n = length of arr

    for i from 0 to n - 1:
        minIndex = i

        for j from i+1 to n:
            if arr[j] < arr[minIndex]:
                minIndex = j

        swap(arr[i],arr[minIndex])
```
