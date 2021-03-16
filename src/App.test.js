import { render, screen } from '@testing-library/react';
import App from './App';
import { getMergeSortAnimations } from './sortingAlgorithms/mergeSort';
import { getQuickSortAnimations } from './sortingAlgorithms/quickSort';
import { getHeapSortAnimations } from './sortingAlgorithms/heapSort';
import { getBubbleSortAnimations } from './sortingAlgorithms/bubbleSort';
import { getInsertionSortAnimations } from './sortingAlgorithms/insertionSort';
import { getSelectionSortAnimations } from './sortingAlgorithms/selectionSort';
import { arraysAreEqual } from './SortingVisualizer/SortingVisualizer';
import { randomIntFromInterval } from './SortingVisualizer/SortingVisualizer';

// test('Merge Sort', () => {
//   const array = [];
//         for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
//             array.push(randomIntFromInterval(5,700));
//         }
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
