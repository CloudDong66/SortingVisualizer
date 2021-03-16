import { Component } from 'react';
import './SortingVisualizer.css';
// import '../index.css';
import { getMergeSortAnimations } from '../sortingAlgorithms/mergeSort';
import { getQuickSortAnimations } from '../sortingAlgorithms/quickSort';
import { getHeapSortAnimations } from '../sortingAlgorithms/heapSort';
import { getBubbleSortAnimations } from '../sortingAlgorithms/bubbleSort';
import { getInsertionSortAnimations } from '../sortingAlgorithms/insertionSort';
import { getSelectionSortAnimations } from '../sortingAlgorithms/selectionSort';


// animation speed
let ANIMATION_SPEED_MS = 5;

// numbers of bars being sorted
let NUMBER_OF_ARRAY_BARS = 200;

// bars color
const PRIMARY_COLOR = 'pink';

// colors of bars been compared during the animation
const SECONDARY_COLOR = '#1b874d';

export function setSpeedFast() {
    ANIMATION_SPEED_MS = 1;
}

export default class SortingVisualizer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5,600));
        }
        this.setState({array});
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    quickSort() {
        const animations = getQuickSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, barTwoIdx] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const tempHeight = barOneStyle.height;
                    barOneStyle.height = barTwoStyle.height;
                    barTwoStyle.height = tempHeight;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    heapSort() {
        const animations = getHeapSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, barTwoIdx] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const tempHeight = barOneStyle.height;
                    barOneStyle.height = barTwoStyle.height;
                    barTwoStyle.height = tempHeight;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    bubbleSort() {
        const animations = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, barTwoIdx] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const tempHeight = barOneStyle.height;
                    barOneStyle.height = barTwoStyle.height;
                    barTwoStyle.height = tempHeight;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    insertionSort() {
        const animations = getInsertionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, barTwoIdx] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const tempHeight = barOneStyle.height;
                    barOneStyle.height = barTwoStyle.height;
                    barTwoStyle.height = tempHeight;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    selectionSort() {
        const animations = getSelectionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, barTwoIdx] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const tempHeight = barOneStyle.height;
                    barOneStyle.height = barTwoStyle.height;
                    barTwoStyle.height = tempHeight;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    setSpeed() {
        const speed = Number(prompt("Set Animation Speed(please type in an int >= 1 and <= 2000):"));
        if (speed < 1 || speed > 2000 || isNaN(speed)) {
            alert("Invalid input, the speed remains default value");
        }
        else {
            ANIMATION_SPEED_MS = speed
        }
    }

    setBarNumber() {
        const barNum = Number(prompt("Set Bar Numbers(please type in an int >= 10 and <= 200):"));
        if (barNum < 10 || barNum > 200 || isNaN(barNum)) {
            alert("Invalid input, the speed remains default value");
        }
        else {
            NUMBER_OF_ARRAY_BARS = barNum
            this.resetArray();
        }
    }

    testSortingAlgorithms() {
        for (let i = 0; i < 100; i++) {
            const array = [];
            const length = randomIntFromInterval(1, 1000);
            for (let i = 0; i < length; i++) {
                array.push(randomIntFromInterval(-1000, 1000));
            }
            const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
            const heapSortedArray = getSelectionSortAnimations(array.slice());
            // console.log(array.slice())
            console.log(arraysAreEqual(javaScriptSortedArray, heapSortedArray));
        }
    }

    render() {
        const {array} = this.state;

        return (
            
            <div className="array-container">
                <nav className="nav-bar">
                    <h2 style={{color:"pink"}}>Sorting Visualizer</h2>
                    <button className="btn-children btnSet" onClick={() => this.setSpeed()}>
                            Set Speed 
                    </button>
                    <button className="btn-children btnSet" onClick={() => this.setBarNumber()}>
                            Set Bar Number 
                    </button>
                </nav>
                {array.map((value, idx) => (
                    <div 
                        className="array-bar" 
                        key={idx}
                        style={{height: `${value}px`}}>
                        
                    </div>
                ))}
                <div>
                    <button className="btn-children btnGen" onClick={() => this.resetArray()}>
                        Generate New Array
                    </button>
                    <button className="btn-children btnSort" onClick={() => this.mergeSort()}>
                        Merge Sort
                    </button>
                    <button className="btn-children btnSort" onClick={() => this.quickSort()}>
                        Quick Sort
                    </button>
                    <button className="btn-children btnSort" onClick={() => this.heapSort()}>
                        Heap Sort
                    </button>
                    <button className="btn-children btnSort" onClick={() => this.bubbleSort()}>
                        Bubble Sort
                    </button>
                    <button className="btn-children btnSort" onClick={() => this.insertionSort()}>
                        Insertion Sort
                    </button>
                    <button className="btn-children btnSort" onClick={() => this.selectionSort()}>
                        Selection Sort
                    </button>
                    
                </div>
            </div>
        );
    }
}

export function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) return false;
    }
    return true;
}


// const javaScriptSortedArray = this.state.array.slice().sort((a,b) => a-b);
//         const sortedArray = getQuickSortAnimations(this.state.array);
//         console.log(this.state.array)
//         console.log(sortedArray);
//         console.log(arraysAreEqual(javaScriptSortedArray,sortedArray));