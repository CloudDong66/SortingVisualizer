export function getBubbleSortAnimations(array) {
    const animations = [];
    let isSorted = false;
    let counter = 0;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < array.length - 1 - counter; i++) {
            if (array[i] > array[i + 1]) {
                animations.push([i, i + 1]);
                animations.push([i, i + 1]);
                animations.push([i, i + 1]);
                swap(i, i + 1, array);
                isSorted = false;
            }
        }
        counter++;
    }
    return animations;
}

function swap(i, j, array) {
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}