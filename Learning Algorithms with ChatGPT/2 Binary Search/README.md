# Pseudo Code

```
function binarySearch(arr, target):
    left = 0
    right = length of arr - 1

    while left <= right:
        mid = left + (right - left) / 2

        if arr[mid] equals target:
            return mid
        else if arr[mid] < target:
            set left = mid + 1
        else:
            set right = mid - 1
    
    return -1 (indicating target not found)

```
