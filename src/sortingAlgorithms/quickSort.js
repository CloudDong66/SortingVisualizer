export function getQuickSortAnimations(array) {
    // create animation arrays
    const animations = [];
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
}

//Quick Sort recursive calls 
function quickSortHelper(array, startIdx, endIdx, animations) {
    if (startIdx >= endIdx) return;
    // choose the first index as the pivot
    const pivotIdx = startIdx;
    // pick left pointer pointing to the index right next to the pivot
    let leftIdx = startIdx + 1;
    // pick right pointer pointing to the index at the end of the input array
    let rightIdx = endIdx;

    // check values when the left pointer is not bigger than the right pointer
    while (rightIdx >= leftIdx) {
        // swap left and right based on quicksort algorithm
        if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
            // 3 pushes for changing color back and forth and swap the comparing values 
            animations.push([leftIdx, rightIdx]);
            animations.push([leftIdx, rightIdx]);
            animations.push([leftIdx, rightIdx]);
            swap(leftIdx, rightIdx, array);
        }
        // move left pointer to right based on quicksort algorithm
        if (array[leftIdx] <= array[pivotIdx]) {
            // 3 pushes for changing color back and forth and swap the comparing values
            animations.push([leftIdx, pivotIdx]);
            animations.push([leftIdx, pivotIdx]);
            animations.push([rightIdx, rightIdx]);
            leftIdx++;
        }
        // move right pointer to left based on quicksort algorithm
        if (array[rightIdx] >= array[pivotIdx]) {
            // 3 pushes for changing color back and forth and swap the comparing values
            animations.push([rightIdx, pivotIdx]);
            animations.push([rightIdx, pivotIdx]);
            animations.push([rightIdx, rightIdx]);
            rightIdx--;
        }
    }

    // 3 pushes for changing color back and forth and swap the comparing values
    animations.push([pivotIdx, rightIdx]);
    animations.push([pivotIdx, rightIdx]);
    animations.push([pivotIdx, rightIdx]);
    // swap pivot with right pointer
    swap(pivotIdx, rightIdx, array);
    const leftSubarrayIsSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
    // recursive call on the smaller subarray to ensure best space complexity
    if (leftSubarrayIsSmaller) {
        quickSortHelper(array, startIdx, rightIdx - 1, animations);
        quickSortHelper(array, rightIdx + 1, endIdx, animations);
    } else {
        quickSortHelper(array, rightIdx + 1, endIdx, animations);
        quickSortHelper(array, startIdx, rightIdx - 1, animations);
    }
}

// swap function
function swap(i, j, array) {
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}