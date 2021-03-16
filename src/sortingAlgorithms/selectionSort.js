export function getSelectionSortAnimations(array) {
    const animations = []
    let counter = 0;
    for (let i = counter; i < array.length - 1; i++) {
        let smallest = i;
        for (let j = 1 + counter; j < array.length; j++) {
            if (array[j] < array[smallest]) {
                smallest = j;
            }
        }
        animations.push([smallest, counter]);
        animations.push([smallest, counter]);
        animations.push([smallest, counter]);
        swap(smallest, counter, array);
        counter++;
    }
    return animations;
}

function swap(i, j, array) {
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}