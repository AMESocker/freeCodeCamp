const sortButton = document.getElementById('sort');

const sortInputArray = (event) =>{
  event.preventDefault();

  const inputValues = [
    ...document.getElementsByClassName('values-dropdown')
  ].map((dropdown)=>Number(dropdown.value));

const sortedValues = insertionSort(inputValues);

updateUI(sortedValues)
};

const updateUI = (array = []) => {
  array.forEach((num,i)=>{
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num
  })
};
//? The first sorting algorithm you will implement is the bubble sort, which starts at the beginning of the array and 'bubbles up' unsorted values towards the end, iterating through the array until it is completely sorted.
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {console.log(array,array[i])
    for (let j = 0; j < array.length - 1; j++) {// console.log(array[j], array[j + 1]);
      
      if (array[j] > array[j + 1]) { console.log('j > j+1',array[j], array[j + 1])
        let temp = array[j];
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}
//? Selection sort works by finding the smallest value in the array, then swapping it with the first value in the array. Then, it finds the next smallest value in the array, and swaps it with the second value in the array. It continues iterating through the array until it is completely sorted.
const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {console.log(array[i])
    let minIndex = i

    for (let j = i + 1; j < array.length; j++) {console.log(array,'j: '+array[j],'minIndex: '+ array[minIndex])
      if(array[j]<array[minIndex]){console.log('j < minIndex',array[j], array[minIndex])
        minIndex=j
      }
    }

    const temp = array[i];
    array[i] = array[minIndex]
    array[minIndex] = temp
  }

  return array
}
//? The last sorting algorithm that will implement is the insertion sort. This algorithm works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backward into the sorted array until it is in a sorted position, and so on.
const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    const currValue = array[i]
    let j = i - 1;
    while (j >= 0 && array[j] > currValue) {
      j--;
    }
  }
};

sortButton.addEventListener('click',sortInputArray);