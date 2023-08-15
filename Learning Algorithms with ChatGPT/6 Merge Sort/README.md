# Pseudo Code

```
function mergeSort(arr):
    if length of arr <= 1:
        return arr
    middle = length of arr / 2
    left = mergeSort(first half of arr)
    right = mergeSort(second half of arr)

    return merge(left, right)

function merge(left, right):
    result = empty array

    while left is not empty and right is not empty:
        if element of left <= element of right:
            append the first element of left to result
            remove first element of left
        else:
            append the first element of right to result
            remove first element of right
    
    append remaining elements of left to result
    append remaining elements of right to result

    return result
```
