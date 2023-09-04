# Pseudo Code

```
function heapify(arr, i, n):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2

    if left < n and arr[left] > arr[largest]:
        largest = left
    
    if right < n and arr[right] > arr[largest]:
        largest = right

    if largest != i
        swap(arr[i], arr[largest])
        heapify(arr, largest, n)

    
function heapSort(arr):
    n = arr.length

    for i from n/2 - 1 to 0:
        heapify(arr, i, n)
    

    for i from n - 1 to 1:
        swap (arr[0], arr[i])
        heapify(arr, 0, i)


```