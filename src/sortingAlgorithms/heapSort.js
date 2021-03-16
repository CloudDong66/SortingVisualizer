export function getHeapSortAnimations(array) {
    // create animation array 
    const animations = []
    // build heap with the input array
    buildMaxHeap(array, animations);
    for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
        // 3 pushes for changing color back and forth and swap the comparing values
        animations.push([0, endIdx]);
        animations.push([0, endIdx]);
        animations.push([0, endIdx]);
        // swap the root(max) with the last node, pop the new last 
        //and heapify down the new root
        swap(0, endIdx, array);
        heapifyDown(0, endIdx - 1, array, animations);
    }
    return animations;
}

//build heap
function buildMaxHeap(array, animations) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
        heapifyDown(currentIdx, array.length - 1, array, animations);
    }
}

// heapify down
function heapifyDown(currentIdx, endIdx, heap, animations) {
    let childOneIdx = currentIdx * 2 + 1;
    while(childOneIdx <= endIdx) {
        // 3 pushes for changing color back and forth and swap the comparing values
        animations.push([childOneIdx, endIdx]);
        animations.push([childOneIdx, endIdx]);
        animations.push([childOneIdx, childOneIdx]);
        const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
        let largestIdx;
        if (childTwoIdx !== -1 && heap[childTwoIdx] > heap[childOneIdx]) {
            largestIdx = childTwoIdx;
        } else {
            largestIdx = childOneIdx;
        }
        if (heap[largestIdx] > heap[currentIdx]) {
            // 3 pushes for changing color back and forth and swap the comparing values
            animations.push([currentIdx, largestIdx]);
            animations.push([currentIdx, largestIdx]);
            animations.push([currentIdx, largestIdx]);
            swap(currentIdx, largestIdx, heap);
            currentIdx = largestIdx;
            childOneIdx = currentIdx * 2 + 1;
        } else {
            return;
        }
    }
}

function swap(i, j, array) {
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}